// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC
// The main entry point for UI part needed by the exporter.

import * as gsb from 'app/common/geom/shapes/bounds';
import * as log from 'app/common/logging';
import * as mth from 'app/common/math';
import * as sm from 'app/common/schema';
import * as ctkl from 'app/common/types/components-list';
import * as u from 'app/common/uri';
import * as df from 'app/main/data/fonts';
import * as features from 'app/main/features';
import * as render from 'app/main/render';
import * as repo from 'app/main/repo';
import { emit, state } from 'app/main/store';
import * as ctx from 'app/main/ui/context';
import * as dom from 'app/util/dom';
import * as glob from 'app/util/globals';
import * as rx from 'beicon.v2.core';
import * as str from 'cuerdas.core';
import { css } from 'garden.core';
import * as l from 'okulary.core';
import * as ptk from 'potok.v2.core';
import * as mf from 'rumext.v2';

log.setup!({ app: 'info' });

// Set current team
export const setCurrentTeam = (team: any): ptk.UpdateEvent & ptk.WatchEvent => {
  return {
    [ptk.type]: 'set-current-team',
    [ptk/update](state: any) {
      return state
        .set('permissions', team.permissions)
        .update('teams', (teams: any) => teams.set(team.id, team))
        .set('currentTeamId', team.id);
    },
    [ptk/watch](_state: any, _stream: any) {
      return rx.of(features.initialize!(features));
    },
  } as any;
};

// Fetch team
export const fetchTeam = (options: { fileId?: string }): ptk.WatchEvent => {
  return {
    [ptk/type]: 'fetch-team',
    [ptk/watch](_state: any, _stream: any) {
      return repo.cmd!('get-team', { fileId: options.fileId }).pipe(
        rx.mapCat((team: any) =>
          rx.of(
            setCurrentTeam(team),
            ptk.dataEvent!('team-fetched', team)
          )
        )
      );
    },
  } as any;
};

// Ref to objects derived from state
const refObjects = l.derived('objects', state);

interface ObjectSvgProps {
  objectId: string;
  embed?: boolean;
  skipChildren?: boolean;
}

export const ObjectSvg: React.FC<ObjectSvgProps> = ({ objectId, embed, skipChildren }) => {
  const objects = state.get('objects');

  // Set global CSS to assign page size, needed for PDF exportation
  useEffect(() => {
    if (objects && objects[objectId]) {
      const bounds = gsb.getObjectBounds!([objects], objects[objectId]);
      const { width, height } = bounds;
      dom.setPageStyle!({
        size: `${mth.ceil!(width)}px ${mth.ceil!(height)}px`,
      });
    }
  }, [objects, objectId]);

  if (!objects) return null;

  return (
    <ctx.IsRenderContext.Provider value={true}>
      <render.ObjectSvg
        objects={objects}
        objectId={objectId}
        embed={embed}
        skipChildren={skipChildren}
      />
    </ctx.IsRenderContext.Provider>
  );
};

interface ObjectsSvgProps {
  objectIds: string[];
  embed?: boolean;
  skipChildren?: boolean;
}

export const ObjectsSvg: React.FC<ObjectsSvgProps> = ({ objectIds, embed, skipChildren }) => {
  const objects = state.get('objects');

  if (!objects) return null;

  return (
    <>
      {objectIds.map((objectId) => {
        const adaptedObjects = render.adaptObjectsForShape!(objects, objectId);
        return (
          <ctx.IsRenderContext.Provider key={String(objectId)} value={true}>
            <render.ObjectSvg
              objects={adaptedObjects}
              objectId={objectId}
              embed={embed}
              skipChildren={skipChildren}
            />
          </ctx.IsRenderContext.Provider>
        );
      })}
    </>
  );
};

// Fetch objects bundle
const fetchObjectsBundle = (options: {
  fileId: string;
  pageId: string;
  shareId?: string;
  objectId?: string;
}): ptk.WatchEvent => {
  return {
    [ptk/type]: 'fetch-objects-bundle',
    [ptk/watch](state: any, _stream: any) {
      const features = state.get('features');

      return rx.zip!(
        repo.cmd!('get-font-variants', { fileId: options.fileId, shareId: options.shareId }),
        repo.cmd!('get-page', {
          fileId: options.fileId,
          pageId: options.pageId,
          shareId: options.shareId,
          objectId: options.objectId,
          features,
        })
      ).pipe(
        rx.tap(([fonts]: any[]) => {
          if (fonts && fonts.length > 0) {
            emit(df.fontsFetched!(fonts));
          }
        }),
        rx.observeOn!('async'),
        rx.map(([, page]: any[]) => page.objects),
        rx.map((objects: any) => {
          const adapted = render.adaptObjectsForShape!(objects, options.objectId);
          return () => ({ objects: adapted });
        })
      );
    },
  } as any;
};

// Schema for render objects
const schemaRenderObjects = {
  title: 'render-objects',
  type: 'object',
  properties: {
    pageId: { type: 'string' },
    fileId: { type: 'string' },
    shareId: { type: 'string' },
    embed: { type: 'boolean' },
    skipChildren: { type: 'boolean' },
    objectId: { type: ['array', 'string'] },
  },
  required: ['pageId', 'fileId'],
};

// Coerce render objects params
const coerceRenderObjectsParams = sm.coercer!(schemaRenderObjects);

// Render objects
export const renderObjects = (params: any) => {
  try {
    const coerced = coerceRenderObjectsParams(params);
    const { fileId, pageId, embed, shareId, objectId, skipChildren } = coerced;

    emit(fetchObjectsBundle({ fileId, pageId, shareId, objectId }));

    if (typeof objectId === 'string') {
      return mf.html!(
        <ObjectSvg
          fileId={fileId}
          pageId={pageId}
          shareId={shareId}
          objectId={objectId}
          embed={embed}
          skipChildren={skipChildren}
        />
      );
    } else {
      return mf.html!(
        <ObjectsSvg
          fileId={fileId}
          pageId={pageId}
          shareId={shareId}
          objectIds={objectId}
          embed={embed}
          skipChildren={skipChildren}
        />
      );
    }
  } catch (cause) {
    const explain = (cause as any).exData?.explain;
    if (explain) {
      console.log('Unexpected error');
      console.log(sm.humanizeExplain!(explain));
    }
    return mf.html!(<span>Unexpected error: {(cause as Error).message}</span>);
  }
};

// Components SVG
interface ComponentsSvgProps {
  embed?: boolean;
  componentId?: string;
}

export const ComponentsSvg: React.FC<ComponentsSvgProps> = ({ embed, componentId }) => {
  const [componentState, setComponentState] = useState({ componentId });
  const fileRef = l.derived('file', state);
  const file = fileRef.get();

  if (!file) return null;

  return (
    <>
      <style>
        {css([
          ['body', { margin: 0, overflow: 'hidden', width: '100vw', height: '100vh' }],
          [
            'main',
            {
              overflow: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'calc(100vh - 200px)',
            },
            ['svg', { width: '50%', height: '50%' }],
          ],
          [
            '.nav',
            {
              display: 'flex',
              margin: 0,
              padding: '10px',
              flexDirection: 'column',
              flexWrap: 'wrap',
              height: '200px',
              listStyle: 'none',
              overflowX: 'scroll',
              borderBottom: '1px dotted #e6e6e6',
            },
            ['a', { cursor: 'pointer', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', textDecoration: 'underline' }],
            ['li', { display: 'flex', width: '150px', padding: '5px', border: '0px solid black' }],
          ],
        ])}
      </style>

      <ul className="nav">
        {Object.entries(ctkl.components(file.data)).map(([id, data]: [string, any]) => (
          <li key={String(id)}>
            <a onClick={(e) => {
              dom.preventDefault!(e);
              setComponentState({ componentId: id });
            }}>
              {data.name}
            </a>
          </li>
        ))}
      </ul>

      <main>
        <render.ComponentsSvg data={file.data} embed={embed} />
        {componentState.componentId && (
          <use x={0} y={0} href={`#${componentState.componentId}`} />
        )}
      </main>
    </>
  );
};

// Fetch components bundle
const fetchComponentsBundle = (options: { fileId: string }): ptk.WatchEvent => {
  return {
    [ptk/type]: 'fetch-components-bundle',
    [ptk/watch](state: any, _stream: any) {
      const features = state.get('features');
      return repo.cmd!('get-file', { id: options.fileId, features }).pipe(
        rx.map((file: any) => () => ({ file }))
      );
    },
  } as any;
};

// Schema for render components
const schemaRenderComponents = {
  title: 'render-components',
  type: 'object',
  properties: {
    fileId: { type: 'string' },
    embed: { type: 'boolean' },
    componentId: { type: 'string' },
  },
  required: ['fileId'],
};

// Coerce render components params
const coerceRenderComponentsParams = sm.coercer!(schemaRenderComponents);

// Render components
export const renderComponents = (params: any) => {
  try {
    const coerced = coerceRenderComponentsParams(params);
    const { fileId, componentId, embed } = coerced;

    emit({
      [ptk/type]: 'initialize-render-components',
      [ptk/watch](_state: any, stream: any) {
        return rx.merge(
          rx.of(fetchTeam!({ fileId })),
          stream.pipe(
            rx.filter((e: any) => ptk.type(e) === 'team-fetched'),
            rx.observeOn!('async'),
            rx.map(() => params),
            rx.map(fetchComponentsBundle)
          )
        );
      },
    } as any);

    return mf.html!(<ComponentsSvg componentId={componentId} embed={embed} />);
  } catch (cause) {
    const explain = (cause as any).exData?.explain;
    if (explain) {
      console.log('Unexpected error');
      console.log(sm.humanizeExplain!(explain));
    }
    return mf.html!(<span>Unexpected error: {(cause as Error).message}</span>);
  }
};

// Setup
let appRoot: any;

const initUI = () => {
  const params = parseParams(glob.location);
  if (!params) return;

  let component: any = null;
  switch (params.route) {
    case 'objects':
      component = renderObjects(params);
      break;
    case 'components':
      component = renderComponents(params);
      break;
  }

  if (component) {
    const el = dom.getElement('app');
    appRoot = mf.createRoot!(el);
    mf.render!(appRoot, component);
  }
};

// Parse params from location
const parseParams = (loc: any) => {
  const href = loc?.href;
  if (!href) return null;
  const uri = u.uri!(href);
  return u.queryStringToMap!(uri?.query);
};

// Exported init function
export const init = () => {
  initUI();
};

// Reinit
export const reinit = () => {
  initUI();
};

// Hot reload support
export const afterLoad = () => {
  reinit();
};