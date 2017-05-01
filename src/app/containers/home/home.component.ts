import 'rxjs/add/observable/interval';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as selectors from '../../reducers';
import { exampleActions } from '../../actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  counter$: Observable<number>;
  message$: Observable<string>;

  title = 'app works!';

  constructor (
    private _store$: Store<selectors.State>
  ) {}

  ngOnInit() {
    this.counter$ = this._store$.select(selectors.getExampleCounter);
    this.message$ = this._store$.select(selectors.getExampleMessage);
    Observable.interval(1000).first().subscribe(() => this.increment());
  }

  increment () {
    this.counter$.first().subscribe(val => this._store$.dispatch(new exampleActions.IncAction(val + 1)));
  }
}
