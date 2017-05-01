import 'rxjs/add/observable/interval';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as selectors from '../../reducers';
import { exampleActions } from '../../actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter$: Observable<number>;

  title = 'app works!';

  constructor (
    private _store$: Store<selectors.State>
  ) {}

  ngOnInit () {
    this.counter$ = this._store$.select(selectors.getExampleCounter);
    Observable.interval(1000).subscribe(() => this.increment());
  }

  increment () {
    this.counter$.first().subscribe(val => this._store$.dispatch(new exampleActions.SetAction(val + 1)));
  }
}
