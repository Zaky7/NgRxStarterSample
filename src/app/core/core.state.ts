import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { SettingsState } from './settings/settings.model';
import { settingsReducer } from './settings/settings.reducer';


export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
};

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export interface AppState {
  settings: SettingsState;
}
