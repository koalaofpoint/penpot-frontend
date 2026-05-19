// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as stl from 'app/main/style';
import * as d from 'app/common/data';
import * as cfo from 'app/common/files/tokens';
import * as clt from 'app/common/logic/tokens';
import * as sm from 'app/common/schema';
import * as ctob from 'app/common/types/tokens-lib';
import { maxInputLength } from 'app/main/constants';
import * as ev from 'app/main/data/event';
import * as modal from 'app/main/data/modal';
import * as dwtl from 'app/main/data/workspace/tokens/library-edit';
import * as refs from 'app/main/refs';
import { emit, store } from 'app/main/store';
import { Button } from 'app/main/ui/ds/buttons/button';
import { IconButton } from 'app/main/ui/ds/buttons/icon-button';
import { Combobox } from 'app/main/ui/ds/controls/combobox';
import { Input } from 'app/main/ui/ds/controls/input';
import { Switch } from 'app/main/ui/ds/controls/switch';
import { Label } from 'app/main/ui/ds/controls/utilities/label';
import { Icon } from 'app/main/ui/ds/foundations/assets/icon';
import { Heading } from 'app/main/ui/ds/foundations/typography/heading';
import { Text } from 'app/main/ui/ds/foundations/typography/text';
import { ControlledSetsList } from 'app/main/ui/workspace/tokens/sets/lists';
import * as dom from 'app/util/dom';
import * as i18n from 'app/util/i18n';
import * as keyboard from 'app/util/keyboard';
import * as str from 'cuerdas.core';
import * as ptk from 'potok.v2.core';
import React, { useCallback, useMemo, useRef, useState } from 'react';

const { tr } = i18n;

// Empty Themes View Component
interface EmptyThemesProps {
  changeView: (view: string) => void;
}

const EmptyThemes: React.FC<EmptyThemesProps> = ({ changeView }) => {
  const createTheme = useCallback(() => {
    changeView('create-theme');
  }, [changeView]);

  return (
    <div className={stl.css('themes-modal-wrapper')}>
      <Heading
        level={2}
        typography="headline-medium"
        className={stl.css('themes-modal-title')}
      >
        {tr('workspace.tokens.themes-list')}
      </Heading>
      <div className={stl.css('empty-themes-wrapper')}>
        <div className={stl.css('empty-themes-message')}>
          <Text
            as="span"
            typography="title-medium"
            className={stl.css('empty-theme-title')}
          >
            {tr('workspace.tokens.no-themes-currently')}
          </Text>
          <Text
            as="span"
            className={stl.css('empty-theme-subtitle')}
            typography="body-medium"
          >
            {tr('workspace.tokens.create-new-theme')}
          </Text>
        </div>
        <div className={stl.css('button-footer')}>
          <Button
            variant="secondary"
            type="button"
            onClick={() => modal.hide()}
          >
            {tr('labels.close')}
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={createTheme}
          >
            {tr('workspace.tokens.add-new-theme')}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Themes Overview Component
interface ThemesOverviewProps {
  changeView: (view: string, opts?: { themeInfo?: [string, string, string] }) => void;
}

const ThemesOverview: React.FC<ThemesOverviewProps> = ({ changeView }) => {
  const activeThemePaths = refs.workspaceActiveThemePaths || new Map();
  const themesGroups = refs.workspaceTokenThemeTreeNoHidden || [];

  const createTheme = useCallback(
    (e: React.MouseEvent) => {
      dom.preventDefault(e);
      dom.stopPropagation(e);
      changeView('create-theme');
    },
    [changeView]
  );

  return (
    <div className={stl.css('themes-modal-wrapper')}>
      <Heading
        level={2}
        typography="headline-medium"
        className={stl.css('themes-modal-title')}
      >
        {tr('workspace.tokens.themes-list')}
      </Heading>
      <Text
        as="div"
        typography="body-medium"
        className={stl.css('themes-modal-description')}
      >
        {tr('workspace.tokens.themes-description')}
      </Text>

      <ul className={stl.css('theme-group-wrapper')}>
        {themesGroups.map(([group, themes]) => (
          <li key={`token-theme-group-${group}`}>
            {group && (
              <Heading
                level={3}
                className={stl.css('theme-group-label')}
                typography="body-large"
              >
                <div
                  className={stl.css('group-title')}
                  title={`${tr('workspace.tokens.group-name')}: ${group}`}
                >
                  <Icon iconId="group" className={stl.css('group-title-icon')} />
                  <Text
                    as="span"
                    typography="body-medium"
                    className={stl.css('group-title-name')}
                  >
                    {group}
                  </Text>
                </div>
              </Heading>
            )}
            <ul className={stl.css('theme-group-rows-wrapper')}>
              {themes.map(([_, theme]) => {
                const themePath = ctob.getThemePath(theme);
                const selected = activeThemePaths.has(themePath);

                const deleteTheme = (e: React.MouseEvent) => {
                  dom.preventDefault(e);
                  dom.stopPropagation(e);
                  emit(dwtl.deleteTokenTheme(theme.id));
                };

                const onSwitchTheme = () => {
                  emit(dwtl.toggleTokenThemeActive(theme.id));
                };

                const onEditTheme = (e: React.MouseEvent) => {
                  dom.preventDefault(e);
                  dom.stopPropagation(e);
                  changeView('edit-theme', {
                    themeInfo: [theme.id, theme.group, theme.name],
                  });
                };

                return (
                  <li key={themePath} className={stl.css('theme-row')}>
                    <div className={stl.css('theme-switch-row')}>
                      <Switch
                        id={theme.name}
                        label={theme.name}
                        onChange={onSwitchTheme}
                        defaultChecked={selected}
                      />
                    </div>
                    <div className={stl.css('theme-actions-row')}>
                      {theme.sets && theme.sets.length > 0 ? (
                        <Button
                          className={stl.css('sets-count-button')}
                          variant="secondary"
                          type="button"
                          title={tr('workspace.tokens.sets-hint')}
                          onClick={onEditTheme}
                        >
                          <div className={stl.css('label-wrapper')}>
                            <Text as="span" typography="body-medium">
                              {tr('workspace.tokens.num-active-sets', theme.sets.length)}
                            </Text>
                            <Icon iconId="arrow-right" />
                          </div>
                        </Button>
                      ) : (
                        <Button
                          className={stl.css('sets-count-empty-button')}
                          variant="secondary"
                          type="button"
                          title={tr('workspace.tokens.sets-hint')}
                          onClick={onEditTheme}
                        >
                          <div className={stl.css('label-wrapper')}>
                            <Text as="span" typography="body-medium">
                              {tr('workspace.tokens.no-active-sets')}
                            </Text>
                            <Icon iconId="arrow-right" />
                          </div>
                        </Button>
                      )}
                      <IconButton
                        onClick={deleteTheme}
                        variant="ghost"
                        aria-label={tr('workspace.tokens.delete-theme-title')}
                        icon={Icon.iconId('delete')}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>

      <div className={stl.css('button-footer')}>
        <Button
          variant="secondary"
          type="button"
          onClick={() => modal.hide()}
        >
          {tr('labels.close')}
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={createTheme}
        >
          {tr('workspace.tokens.add-new-theme')}
        </Button>
      </div>
    </div>
  );
};

// Theme Inputs Component
interface ThemeInputsProps {
  theme: {
    id?: string;
    name: string;
    group?: string;
    description?: string;
  };
  onChangeField: (field: string, value: string) => void;
}

const ThemeInputs: React.FC<ThemeInputsProps> = ({ theme, onChangeField }) => {
  const tokensLib = refs.tokensLib;
  const themeGroups = refs.workspaceTokenThemeGroups || [];

  const themeNameRef = useRef(theme.name);
  const [currentGroup, setCurrentGroup] = useState(theme.group || '');
  const [currentName, setCurrentName] = useState(theme.name);
  const [groupErrors, setGroupErrors] = useState<string[]>([]);
  const [nameErrors, setNameErrors] = useState<string[]>([]);

  const options = useMemo(
    () =>
      themeGroups.map((group: string) => ({
        label: group,
        id: group,
      })),
    [themeGroups]
  );

  const onUpdateGroup = useCallback(
    (value: string) => {
      const errors = sm.validationErrors(
        value,
        cfo.makeTokenThemeGroupSchema(tokensLib, currentName, ctob.getId(theme))
      );
      setGroupErrors(errors);
      if (errors.length === 0) {
        setCurrentGroup(value);
        onChangeField('group', value);
      } else {
        onChangeField('group', '');
      }
    },
    [onChangeField, tokensLib, currentName, theme]
  );

  const onUpdateName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const errors = sm.validationErrors(
        value,
        cfo.makeTokenThemeNameSchema(
          tokensLib,
          currentGroup,
          ctob.getId(theme)
        )
      );
      setNameErrors(errors);
      themeNameRef.current = value;
      if (errors.length === 0) {
        setCurrentName(value);
        onChangeField('name', value);
      } else {
        onChangeField('name', '');
      }
    },
    [onChangeField, tokensLib, currentGroup, theme]
  );

  return (
    <div className={stl.css('edit-theme-inputs-wrapper')}>
      <div className={stl.css('group-input-wrapper')}>
        <Label htmlFor="groups-dropdown" isOptional>
          {tr('workspace.tokens.label.group')}
        </Label>
        <Combobox
          id="groups-dropdown"
          placeholder={tr('workspace.tokens.label.group-placeholder')}
          defaultSelected={theme.group}
          options={options}
          hasError={d.notEmpty(groupErrors)}
          onChange={onUpdateGroup}
        />
      </div>

      <div className={stl.css('group-input-wrapper')}>
        <Input
          label={tr('workspace.tokens.label.theme')}
          placeholder={tr('workspace.tokens.label.theme-placeholder')}
          maxLength={maxInputLength}
          variant="comfortable"
          defaultValue={themeNameRef.current}
          autoFocus
          hintType={nameErrors.length > 0 ? 'error' : undefined}
          hintMessage={nameErrors[0]}
          onChange={onUpdateName}
        />
      </div>
    </div>
  );
};

// Theme Modal Buttons Component
interface ThemeModalButtonsProps {
  closeModal: (e: React.MouseEvent) => void;
  onSaveForm: (e: React.MouseEvent) => void;
  disabled?: boolean;
}

const ThemeModalButtons: React.FC<ThemeModalButtonsProps> = ({
  closeModal,
  onSaveForm,
  disabled,
}) => {
  const handleKeyDownCancel = useCallback(
    (event: React.KeyboardEvent) => {
      if (keyboard.enter(event)) {
        closeModal(event as unknown as React.MouseEvent);
      }
    },
    [closeModal]
  );

  const handleKeyDownSave = useCallback(
    (event: React.KeyboardEvent) => {
      if (keyboard.enter(event)) {
        onSaveForm(event as unknown as React.MouseEvent);
      }
    },
    [onSaveForm]
  );

  return (
    <>
      <Button
        variant="secondary"
        type="button"
        onClick={closeModal}
        onKeyDown={handleKeyDownCancel}
      >
        {tr('labels.cancel')}
      </Button>
      <Button
        variant="primary"
        type="submit"
        onClick={onSaveForm}
        onKeyDown={handleKeyDownSave}
        disabled={disabled}
      >
        {tr('workspace.tokens.save-theme')}
      </Button>
    </>
  );
};

// Helper to make library with theme
const makeLibWithTheme = (theme: any, sets: any[]) => {
  let tlib = ctob.makeTokensLib();
  tlib = ctob.addTheme(tlib, theme);
  tlib = sets.reduce((acc, set) => ctob.addSet(acc, set), tlib);
  return ctob.activateTheme(tlib, ctob.getId(theme));
};

// Edit/Create Theme Component
interface EditCreateThemeProps {
  changeView: (view: string) => void;
  theme: any;
  onSave: (theme: any) => void;
  isEditing: boolean;
  hasPrevView: boolean;
}

const EditCreateTheme: React.FC<EditCreateThemeProps> = ({
  changeView,
  theme,
  onSave,
  isEditing,
  hasPrevView,
}) => {
  const orderedTokenSets = refs.workspaceOrderedTokenSets || [];
  const tokensLib = refs.tokensLib;
  const tokenSets = refs.workspaceTokenSetsTree || [];

  const [currentTheme, setCurrentTheme] = useState(theme);
  const lib = useMemo(
    () => makeLibWithTheme(currentTheme, orderedTokenSets),
    [currentTheme, orderedTokenSets]
  );

  // Form / Modal handlers
  const onBack = useCallback(() => {
    changeView('themes-overview');
  }, [changeView]);

  const disabled = str.trim(currentTheme.name).length === 0;

  const onChangeField = useCallback((field: string, value: any) => {
    setCurrentTheme((prev: any) => ({ ...prev, [field]: value }));
  }, []);

  const onSaveForm = useCallback(
    (e: React.MouseEvent) => {
      dom.preventDefault(e);
      const themePrime = {
        ...currentTheme,
        name: str.trim(currentTheme.name),
        group: str.trim(currentTheme.group || ''),
        description: str.trim(currentTheme.description || ''),
      };
      if (!str.empty(themePrime.name)) {
        onSave(themePrime);
      }
      onBack();
    },
    [currentTheme, onSave, onBack]
  );

  const closeModal = useCallback((e: React.MouseEvent) => {
    dom.preventDefault(e);
    emit(modal.hide());
  }, []);

  const onDeleteTheme = useCallback(() => {
    emit(dwtl.deleteTokenTheme(ctob.getId(currentTheme)));
    onBack();
  }, [currentTheme, onBack]);

  // Sets tree handlers
  const tokenSetGroupActive = useCallback(
    (groupPath: string) => {
      return ctob.setsAtPathAllActive(lib, groupPath);
    },
    [lib]
  );

  const tokenSetActive = useCallback(
    (name: string) => {
      return currentTheme.sets?.has(name) ?? false;
    },
    [currentTheme]
  );

  const onToggleTokenSet = useCallback(
    (setName: string) => {
      setCurrentTheme((prev: any) => ctob.toggleSet(prev, setName));
    },
    []
  );

  const onToggleTokenSetGroup = useCallback(
    (groupPath: string) => {
      setCurrentTheme((themePrime: any) => {
        const libPrime = makeLibWithTheme(themePrime, orderedTokenSets);
        return clt.toggleTokenSetGroup(groupPath, libPrime, themePrime);
      });
    },
    [orderedTokenSets]
  );

  const onClickTokenSet = useCallback(
    (setId: string) => {
      const set = ctob.getSet(lib, setId);
      onToggleTokenSet(ctob.getName(set));
    },
    [lib, onToggleTokenSet]
  );

  return (
    <div className={stl.css('themes-modal-wrapper')}>
      <Heading
        level={2}
        typography="headline-medium"
        className={stl.css('themes-modal-title')}
      >
        {isEditing
          ? tr('workspace.tokens.edit-theme-title')
          : tr('workspace.tokens.add-new-theme')}
      </Heading>

      <form onSubmit={onSaveForm} className={stl.css('edit-theme-form')}>
        <div className={stl.css('edit-theme-wrapper')}>
          {hasPrevView && (
            <button
              onClick={onBack}
              className={stl.css('back-btn')}
              type="button"
            >
              <Icon iconId="arrow-left" aria-hidden />
              {tr('workspace.tokens.back-to-themes')}
            </button>
          )}

          <ThemeInputs theme={currentTheme} onChangeField={onChangeField} />

          <Text
            as="span"
            typography="body-small"
            className={stl.css('select-sets-message')}
          >
            {tr('workspace.tokens.set-selection-theme')}
          </Text>

          <div className={stl.css('sets-list-wrapper')}>
            <ControlledSetsList
              tokensLib={tokensLib}
              tokenSets={tokenSets}
              isTokenSetActive={tokenSetActive}
              isTokenSetGroupActive={tokenSetGroupActive}
              onSelect={onClickTokenSet}
              canEdit={false}
              onToggleTokenSet={onToggleTokenSet}
              onToggleTokenSetGroup={onToggleTokenSetGroup}
              origin="theme-modal"
            />
          </div>

          <div className={stl.css('edit-theme-footer')}>
            {isEditing && (
              <Button
                variant="secondary"
                type="button"
                icon={Icon.iconId('delete')}
                onClick={onDeleteTheme}
              >
                {tr('labels.delete')}
              </Button>
            )}
            <div className={stl.css('button-footer')}>
              <ThemeModalButtons
                closeModal={closeModal}
                onSaveForm={onSaveForm}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const hasPrevView = (prevViewType: string) => {
  return ['empty-themes', 'themes-overview'].includes(prevViewType);
};

// Edit Theme Component
interface EditThemeProps {
  state: {
    themeInfo: [string, string, string];
    prevType: string;
  };
  changeView: (view: string, opts?: any) => void;
}

const EditTheme: React.FC<EditThemeProps> = ({ state, changeView }) => {
  const [themeId, ,] = state.themeInfo;
  const theme = refs.workspaceTokenTheme(themeId);
  const prevHasView = hasPrevView(state.prevType);

  const onSave = useCallback(
    (themePrime: any) => {
      emit(dwtl.updateTokenTheme(themeId, themePrime));
    },
    [themeId]
  );

  return (
    <EditCreateTheme
      changeView={changeView}
      theme={theme}
      onSave={onSave}
      isEditing={true}
      hasPrevView={prevHasView}
    />
  );
};

// Create Theme Component
interface CreateThemeProps {
  state: {
    prevType: string;
  };
  changeView: (view: string) => void;
}

const CreateTheme: React.FC<CreateThemeProps> = ({ state, changeView }) => {
  const theme = ctob.makeTokenTheme({ name: '' });
  const prevHasView = hasPrevView(state.prevType);

  const onSave = useCallback((themePrime: any) => {
    emit(
      ptk.event(ev.event, { name: 'create-tokens-theme' }),
      dwtl.createTokenTheme(themePrime)
    );
  }, []);

  return (
    <EditCreateTheme
      changeView={changeView}
      theme={theme}
      onSave={onSave}
      isEditing={false}
      hasPrevView={prevHasView}
    />
  );
};

// Themes Modal Body Component
interface ThemesModalBodyProps {}

const ThemesModalBody: React.FC<ThemesModalBodyProps> = () => {
  const themes = refs.workspaceTokenThemesNoHidden || [];
  const [state, setState] = useState<{
    type: string;
    prevType?: string;
    themeInfo?: [string, string, string];
  }>(() =>
    themes.length === 0
      ? { type: 'create-theme' }
      : { type: 'themes-overview' }
  );

  const changeView = useCallback(
    (type: string, opts?: { themeInfo?: [string, string, string] }) => {
      setState((currentState) => ({
        type,
        prevType: currentState.type,
        ...(opts?.themeInfo && { themeInfo: opts.themeInfo }),
      }));
    },
    []
  );

  const Component = useMemo(() => {
    switch (state.type) {
      case 'empty-themes':
        return EmptyThemes;
      case 'themes-overview':
        return themes.length === 0 ? EmptyThemes : ThemesOverview;
      case 'edit-theme':
        return EditTheme;
      case 'create-theme':
        return CreateTheme;
      default:
        return EmptyThemes;
    }
  }, [state.type, themes.length]);

  return <Component state={state} changeView={changeView} />;
};

// Token Themes Modal Component
export const TokenThemesModal: React.FC = () => {
  return (
    <div className={stl.css('modal-overlay')}>
      <div
        className={stl.css('modal-dialog')}
        data-testid="token-theme-update-create-modal"
      >
        <IconButton
          className={stl.css('close-btn')}
          onClick={() => modal.hide()}
          aria-label={tr('labels.close')}
          variant="action"
          icon={Icon.iconId('close')}
        />
        <ThemesModalBody />
      </div>
    </div>
  );
};

// Register modal component
modal.register('tokens/themes', TokenThemesModal);
