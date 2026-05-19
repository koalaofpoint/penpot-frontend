import * as d from "../../common/data";
import * as dm from "../../common/data/macros";
import * as cfeat from "../../common/features";
import * as cfh from "../../common/files/helpers";
import * as sm from "../../common/schema";
import * as t from "../../common/transit";
import * as ctt from "../../common/types/shape-tree";
import * as ctsi from "../../common/types/shape.interactions";
import * as uuid from "../../common/uuid";
import * as dcmt from "./comments";
import * as dcm from "./common";
import * as ev from "./event";
import * as df from "./fonts";
import * as features from "./features";
import * as rp from "./repo";
import * as rt from "./router";
import * as ug from "../../util/globals";
import * as rx from "beicon.v2.core";
import * as ptk from "../types/ptok";

// Default local state
const defaultLocalState = {
  zoom: 1,
  fullscreen: false,
  interactionsMode: "show-on-click" as const,
  showInteractions: false,
  commentsMode: "all" as const,
  commentsShow: "unresolved" as const,
  selected: new Set<string>(),
  collapsed: new Set<string>(),
  hover: null as string | null,
  shareId: "",
  fileCommentsUsers: [] as string[]
};

// Schema for initialization
const schemaInitialize: sm.Schema = {
  type: "map",
  title: "initialize",
  attrs: {
    fileId: { type: "uuid" },
    shareId: { type: "uuid", optional: true },
    pageId: { type: "uuid", optional: true }
  }
};

export function initialize(params: { fileId: string; shareId?: string; pageId?: string }): ptk.Event {
  dm.assert("expected valid params", sm.check(schemaInitialize, params));

  return ptk.reify("initialize", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        currentFileId: params.fileId,
        currentShareId: params.shareId,
        viewerLocal: state.viewerLocal || defaultLocalState,
        viewerLocal: {
          ...state.viewerLocal,
          shareId: params.shareId
        }
      };
    },
    watch(state, _stream, _action) {
      return rx.of(
        fetchBundle(d.withoutNils(params)),
        // Only fetch threads for logged-in users
        state.profile && rx.from(dcmt.fetchCommentThreads(params)),
        params.shareId && rx.of(ptk.dataEvent("ev/event", {
          ev: { name: "shared-prototipe-visited" }
        }))
      );
    },
    effect(_state, _stream, _action) {
      // Set the window name for inter-tab navigation
      const name = `viewer-${params.fileId}`;
      // @ts-ignore
      ug.global.name = name;
    }
  });
}

export function finalize_(_params: any): ptk.Event {
  return ptk.reify("finalize", ptk.UpdateEvent, {
    update(state: any) {
      const { viewer, ...rest } = state;
      return rest;
    }
  });
}

// Schema for fetch-bundle
const schemaFetchBundle: sm.Schema = {
  type: "map",
  title: "fetch-bundle",
  attrs: {
    pageId: { type: "uuid" },
    fileId: { type: "uuid" },
    shareId: { type: "uuid", optional: true }
  }
};

function fetchBundle(params: { fileId: string; shareId?: string }): ptk.Event {
  dm.assert("expected valid params", sm.check(schemaFetchBundle, params));

  return ptk.reify("fetch-bundle", ptk.WatchEvent, {
    watch(_state, _stream, _action) {
      const features_ = cfeat.supportedFeatures;
      const params_ = params.shareId
        ? { ...params, shareId: params.shareId }
        : params;

      const resolve = ([key, pointer]: [string, any]) => {
        const resolveParams = {
          ...params,
          fragmentId: pointer
        };
        if (params.shareId) {
          resolveParams.shareId = params.shareId;
        }

        return rp.cmd_("get-file-fragment", resolveParams)
          .pipe(rx.map(data => [key, data]));
      };

      return rp.cmd_("get-view-only-bundle", {
        ...params_,
        features: features_
      }).pipe(
        rx.mapcat(bundle => {
          // Process pages index
          return rx.from(Object.entries(bundle.file.data.pagesIndex)).pipe(
            rx.mergeMap(([key, page]: [string, any]) => {
              if (t.isPointer(page)) {
                return resolve([key, page]);
              }
              return rx.of([key, page]);
            }),
            rx.reduce((acc: any, [key, value]: [string, any]) => {
              acc[key] = value;
              return acc;
            }, {}),
            rx.map(pagesIndex => ({
              ...bundle,
              file: {
                ...bundle.file,
                data: {
                  ...bundle.file.data,
                  pagesIndex
                }
              }
            }))
          );
        }),
        rx.mapcat(bundle => {
          // Process file data
          return rx.from(Object.entries(bundle.file.data)).pipe(
            rx.mergeMap(([key, object]: [string, any]) => {
              if (t.isPointer(object)) {
                return resolve([key, object]);
              }
              return rx.of([key, object]);
            }),
            rx.reduce((acc: any, [key, value]: [string, any]) => {
              acc[key] = value;
              return acc;
            }, {}),
            rx.map(data => ({
              ...bundle,
              file: {
                ...bundle.file,
                data
              }
            }))
          );
        }),
        rx.mapcat(({ fonts, team, ...bundle }: any) => {
          return rx.of(
            df.fontsFetched(fonts),
            features.initialize(team.features),
            bundleFetched({ ...bundle, ...params })
          );
        })
      );
    }
  });
}

export function bundleFetched(bundle: any): ptk.Event {
  const pages = Object.entries(bundle.file.data.pages).reduce((acc: any, [pageId, pageData]: [string, any]) => {
    const data = bundle.file.data.pagesIndex[pageId];
    acc[pageId] = {
      ...data,
      frames: ctt.getViewerFrames(data.objects),
      allFrames: ctt.getViewerFrames(data.objects, { allFrames: true })
    };
    return acc;
  }, {});

  return ptk.reify("bundle-fetched", ptk.UpdateEvent, {
    deref() {
      return bundle;
    },
    update(state: any) {
      const { project, file, team } = bundle;
      const teamId = team.id;
      const teamWithMembers = {
        ...team,
        members: bundle.users
      };

      return {
        ...state,
        shareLinks: bundle.shareLinks,
        currentTeamId: teamId,
        teams: {
          ...state.teams,
          [teamId]: teamWithMembers
        },
        files: {
          ...Object.fromEntries(
            Object.entries(libraries).map(([id, lib]) => [id, lib])
          ),
          [file.id]: file
        },
        viewer: {
          ...state.viewer,
          libraries: Object.fromEntries(
            Object.entries(libraries).map(([id, lib]) => [id, lib])
          ),
          users: Object.fromEntries(
            Object.entries(bundle.users).map(([id, user]) => [id, user])
          ),
          permissions: bundle.permissions,
          project,
          pages,
          thumbnails: bundle.thumbnails,
          file
        }
      };
    },
    watch(state, _stream, _action) {
      const route = state.route;
      const qparams = route.queryParams;
      const index = rt.getQueryParam(qparams, "index");
      const frameId = rt.getQueryParam(qparams, "frame-id");
      const parsedIndex = index ? parseInt(index) : undefined;
      const parsedFrameId = frameId ? uuid.parse(frameId) : undefined;

      return rx.merge(
        rx.of(
          qparams.zoom === "fit" && zoomToFit,
          qparams.zoom === "fill" && zoomToFill
        ).filter(Boolean),
        rx.of(
          parsedFrameId && goToFrame(parsedFrameId),
          parsedIndex && goToFrameByIndex(parsedIndex),
          !parsedFrameId && !parsedIndex && goToFrameAuto()
        ).filter(Boolean)
      );
    }
  });
}

function fetchCommentThreads(params: { fileId: string; pageId?: string; shareId?: string }): ptk.Event {
  const fetched = (data: any, state: any) => {
    const filtered = data.filter((item: any) => item.pageId === params.pageId);
    const indexed = d.indexBy(filtered, "id");
    return {
      ...state,
      commentThreads: indexed
    };
  };

  const onError = (err: any) => {
    if (err.type === "authentication" || err.type === "not-found") {
      return rx.empty();
    }
    return rx.throw(err);
  };

  return ptk.reify("fetch-comment-threads", ptk.WatchEvent, {
    watch(_state, _stream, _action) {
      return rp.cmd_("get-comment-threads", {
        fileId: params.fileId,
        shareId: params.shareId
      }).pipe(
        rx.map(data => (state: any) => fetched(data, state)),
        rx.catch(onError)
      );
    }
  });
}

export function refreshCommentThread(thread: { id: string; fileId: string }): ptk.Event {
  const fetched = (threadData: any, state: any) => {
    return {
      ...state,
      [`commentThreads.${thread.id}`]: threadData
    };
  };

  return ptk.reify("refresh-comment-thread", ptk.WatchEvent, {
    watch(_state, _stream, _action) {
      return rp.cmd_("get-comment-thread", {
        fileId: thread.fileId,
        id: thread.id
      }).pipe(
        rx.map(data => (state: any) => fetched(data, state))
      );
    }
  });
}

export function fetchComments(threadId: string): ptk.Event {
  dm.assert(uuid.isUUID(threadId), "Expected valid UUID for threadId");

  const fetched = (comments: any, state: any) => {
    return {
      ...state,
      [`comments.${threadId}`]: d.indexBy(comments, "id")
    };
  };

  return ptk.reify("retrieve-comments", ptk.WatchEvent, {
    watch(_state, _stream, _action) {
      return rp.cmd_("get-comments", { threadId }).pipe(
        rx.map(data => (state: any) => fetched(data, state))
      );
    }
  });
}

// Zoom management
export function updateZoomQuerystring(): ptk.Event {
  return ptk.reify("update-zoom-querystring", ptk.WatchEvent, {
    watch(state, _stream, _action) {
      const zoomType = state.viewerLocal?.zoomType;
      const params = rt.getParams(state);

      return rx.of(
        rt.nav("viewer", {
          ...params,
          zoom: zoomType
        })
      );
    }
  });
}

export function increaseZoom(): ptk.Event {
  return ptk.reify("increase-zoom", ptk.UpdateEvent, {
    update(state: any) {
      const increase = (zoom: number) => Math.min(zoom * 1.3, 200);
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          zoom: increase(state.viewerLocal?.zoom || 1),
          zoomType: undefined
        }
      };
    }
  });
}

export function decreaseZoom(): ptk.Event {
  return ptk.reify("decrease-zoom", ptk.UpdateEvent, {
    update(state: any) {
      const decrease = (zoom: number) => Math.max(zoom / 1.3, 0.01);
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          zoom: decrease(state.viewerLocal?.zoom || 1),
          zoomType: undefined
        }
      };
    }
  });
}

export function resetZoom(): ptk.Event {
  return ptk.reify("reset-zoom", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          zoom: 1,
          zoomType: undefined
        }
      };
    }
  });
}

export function zoomToFit(): ptk.Event {
  return ptk.reify("zoom-to-fit", ptk.UpdateEvent, {
    update(state: any) {
      const params = rt.getParams(state);
      const pageId = params.pageId ? uuid.parse(params.pageId) : undefined;
      const index = rt.getQueryParam(params, "index");
      const parsedIndex = index ? parseInt(index) : undefined;

      const frames = dm.getIn(
        state,
        ["viewer", "pages", pageId, "frames"]
      );
      const clampedIndex = Math.min(
        parsedIndex || 0,
        Math.max(0, frames.length - 1)
      );
      const frame = frames[clampedIndex];
      const srect = frame.selrect;
      const osize = state.viewerLocal?.viewportSize;
      const wdiff = osize.width / srect.width;
      const hdiff = osize.height / srect.height;
      const minzoom = Math.min(wdiff, hdiff);

      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          zoom: minzoom,
          zoomType: "fit"
        }
      };
    },
    watch(_state, _stream, _action) {
      return rx.of(updateZoomQuerystring());
    }
  });
}

export function zoomToFill(): ptk.Event {
  return ptk.reify("zoom-to-fill", ptk.UpdateEvent, {
    update(state: any) {
      const params = rt.getParams(state);
      const pageId = params.pageId ? uuid.parse(params.pageId) : undefined;
      const index = rt.getQueryParam(params, "index");
      const parsedIndex = index ? parseInt(index) : undefined;

      const frames = dm.getIn(
        state,
        ["viewer", "pages", pageId, "frames"]
      );
      const clampedIndex = Math.min(
        parsedIndex || 0,
        Math.max(0, frames.length - 1)
      );
      const frame = frames[clampedIndex];
      const srect = frame.selrect;
      const osize = state.viewerLocal?.viewportSize;

      const wdiff = osize.width / srect.width;
      const hdiff = osize.height / srect.height;
      const maxzoom = Math.max(wdiff, hdiff);

      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          zoom: maxzoom,
          zoomType: "fill"
        }
      };
    },
    watch(_state, _stream, _action) {
      return rx.of(updateZoomQuerystring());
    }
  });
}

export function toggleZoomStyle(): ptk.Event {
  return ptk.reify("toggle-zoom-style", ptk.WatchEvent, {
    watch(state, _stream, _action) {
      const zoomType = state.viewerLocal?.zoomType;
      return rx.of(
        zoomType === "fit" ? zoomToFill : zoomToFit
      );
    }
  });
}

export function toggleFullscreen(): ptk.Event {
  return ptk.reify("toggle-fullscreen", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          fullscreen: !state.viewerLocal?.fullscreen
        }
      };
    }
  });
}

export function exitFullscreen(): ptk.Event {
  return ptk.reify("exit-fullscreen", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          fullscreen: false
        }
      };
    }
  });
}

export function setViewportSize(params: { size: any }): ptk.Event {
  return ptk.reify("set-viewport-size", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          viewportSize: params.size
        }
      };
    }
  });
}

// Local state management
export function toggleThumbnailsPanel(): ptk.Event {
  return ptk.reify("toggle-thumbnails-panel", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          showThumbnails: !state.viewerLocal?.showThumbnails
        }
      };
    }
  });
}

export function closeThumbnailsPanel(): ptk.Event {
  return ptk.reify("close-thumbnails-panel", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          showThumbnails: false
        }
      };
    }
  });
}

export function selectPrevFrame(): ptk.Event {
  return ptk.reify("select-prev-frame", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerAnimations: undefined,
        viewerOverlays: []
      };
    },
    watch(state, _stream, _action) {
      const params = rt.getParams(state);
      const index = rt.getQueryParam(params, "index");
      const parsedIndex = index ? parseInt(index) : undefined;

      if (parsedIndex && parsedIndex > 0) {
        return rx.of(
          dcmt.closeThread(),
          rt.nav("viewer", {
            ...params,
            index: parsedIndex - 1
          })
        );
      }
      return rx.empty();
    }
  });
}

export function selectNextFrame(): ptk.Event {
  return ptk.reify("select-next-frame", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerAnimations: undefined,
        viewerOverlays: []
      };
    },
    watch(state, _stream, _action) {
      const params = rt.getParams(state);
      const index = rt.getQueryParam(params, "index");
      const parsedIndex = index ? parseInt(index) : undefined;
      const pageId = params.pageId ? uuid.parse(params.pageId) : undefined;

      const total = dm.getIn(
        state,
        ["viewer", "pages", pageId, "frames"]
      )?.length || 0;

      if (parsedIndex !== undefined && parsedIndex < total - 1) {
        return rx.of(
          dcmt.closeThread(),
          rt.nav("viewer", {
            ...params,
            index: parsedIndex + 1
          })
        );
      }
      return rx.empty();
    }
  });
}

export function selectFirstFrame(): ptk.Event {
  return ptk.reify("select-first-frame", ptk.WatchEvent, {
    watch(state, _stream, _action) {
      const params = rt.getParams(state);
      return rx.of(
        dcmt.closeThread(),
        rt.nav("viewer", {
          ...params,
          index: 0
        })
      );
    }
  });
}

const validInteractionModes = new Set(["hide", "show", "show-on-click"]);

export function setInteractionsMode(mode: string): ptk.Event {
  dm.assert(
    "expected valid interaction mode",
    validInteractionModes.has(mode)
  );

  return ptk.reify("set-interactions-mode", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          interactionsMode: mode,
          showInteractions: mode === "show"
        }
      };
    },
    watch(state, _stream, _action) {
      const params = rt.getParams(state);
      return rx.of(
        rt.nav("viewer", {
          ...params,
          interactionsMode: mode
        })
      );
    }
  });
}

export function flashInteractions(): ptk.Event {
  return ptk.reify("flash-interactions", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          showInteractions: true
        }
      };
    },
    watch(_state, stream, _action) {
      const stopper = rx.filter(ptk.isType("flash-interactions"), stream);
      return rx.of(flashDone).pipe(
        rx.delay(500),
        rx.takeUntil(stopper)
      );
    }
  });
}

export function flashDone(): ptk.Event {
  return ptk.reify("flash-done", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          showInteractions: false
        }
      };
    }
  });
}

export function setNavScroll(scroll: any): ptk.Event {
  return ptk.reify("set-nav-scroll", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          navScroll: scroll
        }
      };
    }
  });
}

export function resetNavScroll(): ptk.Event {
  return ptk.reify("reset-nav-scroll", ptk.UpdateEvent, {
    update(state: any) {
      const { navScroll, ...viewerLocal } = state.viewerLocal || {};
      return {
        ...state,
        viewerLocal
      };
    }
  });
}

export function completeAnimation(): ptk.Event {
  return ptk.reify("complete-animation", ptk.UpdateEvent, {
    update(state: any) {
      const { viewerAnimations, ...rest } = state;
      return rest;
    }
  });
}

// Navigation inside page
export function goToFrameByIndex(index: number): ptk.Event {
  return ptk.reify("go-to-frame-by-index", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerOverlays: []
      };
    },
    watch(state, _stream, _action) {
      const params = rt.getParams(state);
      return rx.of(
        rt.nav("viewer", {
          ...params,
          index
        })
      );
    }
  });
}

export function goToFrame(frameId: string, animation?: any): ptk.Event {
  dm.assert(
    "expected valid parameters",
    uuid.isUUID(frameId) &&
    (animation === null || ctsi.checkAnimation(animation))
  );

  return ptk.reify("go-to-frame", ptk.UpdateEvent, {
    update(state: any) {
      const route = state.route;
      const qparams = route.queryParams;
      const pageId = qparams.pageId ? uuid.parse(qparams.pageId) : undefined;
      const index = qparams.index ? parseInt(qparams.index) : undefined;
      const frames = dm.getIn(state, ["viewer", "pages", pageId, "frames"]);
      const frame = frames?.[index];

      const state_ = {
        ...state,
        viewerOverlays: []
      };

      if (animation) {
        return {
          ...state_,
          viewerAnimations: {
            ...state_.viewerAnimations,
            [frameId]: {
              kind: "go-to-frame",
              origFrameId: frame.id,
              animation
            }
          }
        };
      }

      return state_;
    },
    watch(state, _stream, _action) {
      const route = state.route;
      const qparams = route.queryParams;
      const pageId = qparams.pageId ? uuid.parse(qparams.pageId) : undefined;
      const frames = dm.getIn(state, ["viewer", "pages", pageId, "frames"]);
      const index = d.indexOfPred(frames, (f: any) => f.id === frameId);

      return rx.of(goToFrameByIndex(index || 0));
    }
  });
}

export function goToFrameAuto(): ptk.Event {
  return ptk.reify("go-to-frame-auto", ptk.WatchEvent, {
    watch(state, _stream, _action) {
      const route = state.route;
      const qparams = route.queryParams;
      const pageId = qparams.pageId ? uuid.parse(qparams.pageId) : undefined;
      const flows = dm.getIn(state, ["viewer", "pages", pageId, "options", "flows"]);

      if (flows?.length > 0) {
        const frameId = flows[0].startingFrame;
        return rx.of(goToFrame(frameId));
      }

      return rx.of(goToFrameByIndex(0));
    }
  });
}

export function goToSection(section: string): ptk.Event {
  return ptk.reify("go-to-section", ptk.Event, {
    data() {
      return {
        ev: { origin: "viewer" },
        section: String(section)
      };
    },
    update(state: any) {
      return {
        ...state,
        viewerOverlays: []
      };
    },
    watch(state, _stream, _action) {
      const params = rt.getParams(state);
      return rx.of(
        rt.nav("viewer", {
          ...params,
          section
        })
      );
    }
  });
}

// Overlays
function openOverlay_(
  state: any,
  frame: any,
  position: any,
  snapTo: any,
  closeClickOutside: any,
  backgroundOverlay: any,
  animation: any,
  fixedSource?: boolean
) {
  const overlay = {
    frame,
    id: frame.id,
    position,
    snapTo,
    closeClickOutside,
    backgroundOverlay,
    animation,
    fixedSource
  };

  const state_ = {
    ...state,
    viewerOverlays: [...(state.viewerOverlays || []), overlay]
  };

  if (animation) {
    return {
      ...state_,
      viewerAnimations: {
        ...state_.viewerAnimations,
        [frame.id]: {
          kind: "open-overlay",
          overlayId: frame.id,
          animation
        }
      }
    };
  }

  return state_;
}

function closeOverlay_(state: any, frameId: string, animation?: any) {
  if (!animation) {
    return {
      ...state,
      viewerOverlays: state.viewerOverlays?.filter(
        (overlay: any) => overlay.frame.id !== frameId
      ) || []
    };
  }

  return {
    ...state,
    viewerAnimations: {
      ...state.viewerAnimations,
      [frameId]: {
        kind: "close-overlay",
        overlayId: frameId,
        animation
      }
    }
  };
}

export function openOverlay(
  frameId: string,
  position: any,
  snapTo: any,
  closeClickOutside: any,
  backgroundOverlay: any,
  animation: any,
  fixedSource?: boolean
): ptk.Event {
  dm.assert(uuid.isUUID(frameId), "Expected valid UUID for frameId");
  dm.assert(gpt.isPoint(position), "Expected position to be a point");
  dm.assert(
    closeClickOutside === null || typeof closeClickOutside === "boolean",
    "Expected closeClickOutside to be boolean or null"
  );
  dm.assert(
    backgroundOverlay === null || typeof backgroundOverlay === "boolean",
    "Expected backgroundOverlay to be boolean or null"
  );
  dm.assert(
    animation === null || ctsi.checkAnimation(animation),
    "Expected animation to be valid"
  );

  return ptk.reify("open-overlay", ptk.UpdateEvent, {
    update(state: any) {
      const route = state.route;
      const qparams = route.queryParams;
      const pageId = qparams.pageId ? uuid.parse(qparams.pageId) : undefined;
      const frames = dm.getIn(state, ["viewer", "pages", pageId, "allFrames"]);
      const frame = d.seek((f: any) => f.id === frameId, frames);
      const overlays = state.viewerOverlays || [];

      if (!frame || overlays.some((o: any) => o.frame === frame)) {
        return state;
      }

      return openOverlay_(
        state,
        frame,
        position,
        snapTo,
        closeClickOutside,
        backgroundOverlay,
        animation,
        fixedSource
      );
    }
  });
}

export function toggleOverlay(
  frameId: string,
  position: any,
  snapTo: any,
  closeClickOutside: any,
  backgroundOverlay: any,
  animation: any,
  fixedSource?: boolean
): ptk.Event {
  dm.assert(uuid.isUUID(frameId), "Expected valid UUID for frameId");
  dm.assert(gpt.isPoint(position), "Expected position to be a point");
  dm.assert(
    closeClickOutside === null || typeof closeClickOutside === "boolean",
    "Expected closeClickOutside to be boolean or null"
  );
  dm.assert(
    backgroundOverlay === null || typeof backgroundOverlay === "boolean",
    "Expected backgroundOverlay to be boolean or null"
  );
  dm.assert(
    animation === null || ctsi.checkAnimation(animation),
    "Expected animation to be valid"
  );

  return ptk.reify("toggle-overlay", ptk.UpdateEvent, {
    update(state: any) {
      const route = state.route;
      const qparams = route.queryParams;
      const pageId = qparams.pageId ? uuid.parse(qparams.pageId) : undefined;
      const frames = dm.getIn(state, ["viewer", "pages", pageId, "allFrames"]);
      const frame = d.seek((f: any) => f.id === frameId, frames);
      const overlays = state.viewerOverlays || [];

      if (!frame) {
        return state;
      }

      if (overlays.some((o: any) => o.frame === frame)) {
        return closeOverlay_(state, frameId, ctsi.invertDirection(animation));
      }

      return openOverlay_(
        state,
        frame,
        position,
        snapTo,
        closeClickOutside,
        backgroundOverlay,
        animation,
        fixedSource
      );
    }
  });
}

export function closeOverlay(frameId: string, animation?: any): ptk.Event {
  dm.assert(uuid.isUUID(frameId), "Expected valid UUID for frameId");
  dm.assert(
    animation === null || ctsi.checkAnimation(animation),
    "Expected animation to be valid"
  );

  return ptk.reify("close-overlay", ptk.UpdateEvent, {
    update(state: any) {
      return closeOverlay_(state, frameId, animation);
    }
  });
}

// Object selection
export function deselectAll(): ptk.Event {
  return ptk.reify("deselect-all", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          selected: new Set()
        }
      };
    }
  });
}

export function selectShape(id: string): ptk.Event {
  return ptk.reify("select-shape", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          selected: new Set([id])
        }
      };
    }
  });
}

export function toggleSelection(id: string): ptk.Event {
  return ptk.reify("toggle-selection", ptk.UpdateEvent, {
    update(state: any) {
      const selected = state.viewerLocal?.selected || new Set();
      const newSelected = new Set(selected);

      if (selected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }

      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          selected: newSelected
        }
      };
    }
  });
}

export function shiftSelectTo(id: string): ptk.Event {
  return ptk.reify("shift-select-to", ptk.UpdateEvent, {
    update(state: any) {
      const route = state.route;
      const qparams = route.queryParams;
      const pageId = qparams.pageId ? uuid.parse(qparams.pageId) : undefined;
      const objects = dm.getIn(state, ["viewer", "pages", pageId, "objects"]);
      const selection = new Set([
        ...(state.viewerLocal?.selected || []),
        id
      ]);

      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          selected: cfh.expandRegionSelection(objects, selection)
        }
      };
    }
  });
}

export function selectAll(): ptk.Event {
  return ptk.reify("select-all", ptk.UpdateEvent, {
    update(state: any) {
      const route = state.route;
      const qparams = route.queryParams;
      const pageId = qparams.pageId ? uuid.parse(qparams.pageId) : undefined;
      const index = qparams.index ? parseInt(qparams.index) : undefined;
      const objects = dm.getIn(state, ["viewer", "pages", pageId, "objects"]);
      const frameId = dm.getIn(
        state,
        ["viewer", "pages", pageId, "frames", index, "id"]
      );

      const selection = Object.entries(objects)
        .filter(([, obj]: [string, any]) => obj.frameId === frameId)
        .map(([id]) => id);
      selection.push(frameId);

      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          selected: new Set(selection)
        }
      };
    }
  });
}

export function toggleCollapse(id: string): ptk.Event {
  return ptk.reify("toggle-collapse", ptk.UpdateEvent, {
    update(state: any) {
      const collapsed = state.viewerLocal?.collapsed || new Set();
      const toggled = collapsed.has(id);
      const newCollapsed = new Set(collapsed);

      if (toggled) {
        newCollapsed.delete(id);
      } else {
        newCollapsed.add(id);
      }

      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          collapsed: newCollapsed
        }
      };
    }
  });
}

export function hoverShape(id: string, hover: boolean): ptk.Event {
  return ptk.reify("hover-shape", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          hover: hover ? id : null
        }
      };
    }
  });
}

// Navigation outside page
export function goToDashboard(): ptk.Event {
  return ptk.reify("go-to-dashboard", ptk.WatchEvent, {
    watch(state, _stream, _action) {
      const teamId = dm.getIn(state, ["viewer", "project", "team-id"]);
      return rx.of(dcm.goToDashboardRecent({ teamId }));
    }
  });
}

export function goToPage(pageId: string): ptk.Event {
  return ptk.reify("go-to-page", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        viewerLocal: {
          ...state.viewerLocal,
          overlays: []
        }
      };
    },
    watch(state, _stream, _action) {
      const params = {
        ...rt.getParams(state),
        index: 0,
        pageId
      };
      return rx.of(rt.nav("viewer", params));
    }
  });
}

export function goToWorkspace(pageId?: string): ptk.Event {
  return ptk.reify("go-to-workspace", ptk.WatchEvent, {
    watch(state, _stream, _action) {
      const params = rt.getParams(state);
      const fileId = dm.getIn(state, ["viewer", "file", "id"]);
      const teamId = dm.getIn(state, ["viewer", "project", "team-id"]);
      const finalPageId = pageId || params.pageId ? uuid.parse(params.pageId) : undefined;
      const finalParams = {
        pageId: finalPageId,
        fileId,
        teamId
      };
      const name = `workspace-${fileId}`;

      return rx.of(
        rt.nav("workspace", finalParams, {
          newWindow: true,
          windowName: name
        })
      );
    }
  });
}