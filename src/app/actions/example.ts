import { Action } from '@ngrx/store';

import { type } from '../utils';

export const ActionTypes = {
  EXAMPLE_UPDATE:         type('[Example] Update'),
  EXAMPLE_UPDATE_SUCCESS: type('[Example] Update Success'),
  EXAMPLE_SET:            type('[Example] Set')
};

export class UpdateAction implements Action {
  type = ActionTypes.EXAMPLE_UPDATE;
  constructor (public payload: any) {}
}

export class UpdateSuccessAction implements Action {
  type = ActionTypes.EXAMPLE_UPDATE_SUCCESS;
  payload = null;
}

export class SetAction implements Action {
  type = ActionTypes.EXAMPLE_SET;
  constructor (public payload: any) {}
}

export type Actions
  = UpdateAction
  | UpdateSuccessAction
  | SetAction;
