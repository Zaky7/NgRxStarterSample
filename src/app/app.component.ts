import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSettingsLanguage } from './core/settings/settings.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularBeginner';

  language$: Observable<string>;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this.language$ = this._store.pipe(select(selectSettingsLanguage));
  }


}
