import { Action, createReducer, on } from '@ngrx/store';
import { actionSettingsChangeLanguage } from './settings.action';
import { SettingsState } from './settings.model';


export const initialState: SettingsState = {
  language: 'en'
};


const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeLanguage,
    (state, action) => ({ ...state, ...action })
  )
);



export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
