import { createSelector } from '@ngrx/store';
import { selectSettingsState } from '../core.state';
import { SettingsState } from './settings.model';


export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

export const selectSettingsLanguage = createSelector(
  selectSettings,
  (state: SettingsState) => state.language
);
