import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { AppState } from './core.state';
import { settingsReducer } from './settings/settings.reducer';

export {
  AppState
};

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer
};



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // ngrx
    StoreModule.forRoot(reducers)
  ]
})
export class CoreModule { }
