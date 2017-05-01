import { Action } from '@ngrx/store';

import { type } from '../utils';

export const ActionTypes = {
  EXAMPLE_CLEAR_MESSAGE:  type('[Example] Clear Message'),
  EXAMPLE_INC:            type('[Example] Inc'),
  EXAMPLE_INC_SUCCESS:    type('[Example] Inc Success'),
  EXAMPLE_SET:            type('[Example] Set'),
  EXAMPLE_RESET:          type('[Example] Reset')
};

export class ClearMessageAction implements Action {
  type = ActionTypes.EXAMPLE_CLEAR_MESSAGE;
  payload = null;
}

export class IncAction implements Action {
  type = ActionTypes.EXAMPLE_INC;
  constructor (public payload: any) {}
}

export class IncSuccessAction implements Action {
  type = ActionTypes.EXAMPLE_INC_SUCCESS;
  constructor (public payload: string) {}
}

export class SetAction implements Action {
  type = ActionTypes.EXAMPLE_SET;
  constructor (public payload: any) {}
}

export class ResetAction implements Action {
  type = ActionTypes.EXAMPLE_RESET;
  payload = null;
}

export type Actions
  = ClearMessageAction
  | IncAction
  | IncSuccessAction
  | ResetAction
  | SetAction;
