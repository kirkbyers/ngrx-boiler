import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { exampleActions } from '../actions';

@Injectable()
export class ExampleEffects {

  /** Respond to example being updated */
  @Effect()
  updateExample$: Observable<Action> = this._actions$
    .ofType(exampleActions.ActionTypes.EXAMPLE_INC)
    .map((action) => new exampleActions.IncSuccessAction(`Counter updated to ${action.payload} successfully!`));

  /** Respond to non-null update success */
  @Effect()
  updateSuccessExample$: Observable<Action> = this._actions$
    .ofType(exampleActions.ActionTypes.EXAMPLE_INC_SUCCESS)
    .delay(5000)
    .map(() => new exampleActions.ClearMessageAction());

  constructor (
    private _actions$: Actions
  ) {}
}
