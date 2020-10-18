import { createAction, props } from '@ngrx/store';
import { Language } from './settings.model';

export const actionSettingsChangeLanguage = createAction(
  '[Settings] Change Language',
  props<{ language: Language }>()
);
