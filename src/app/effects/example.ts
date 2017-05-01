import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { exampleActions } from '../actions';

@Injectable()
export class FilterEffects {

  /** Respond to example being set */
  @Effect()
  updateFilter$: Observable<Action> = this._actions$
    .ofType(exampleActions.ActionTypes.EXAMPLE_UPDATE)
    .map(() => new exampleActions.UpdateSuccessAction());

  /** Respond to filter being cleared */
  @Effect()
  clearFilter$: Observable<Action> = this._actions$
    .ofType(exampleActions.ActionTypes.EXAMPLE_SET)
    .map((action) => new exampleActions.UpdateAction(action.payload));

  constructor (
    private _actions$: Actions
  ) {}
}
