import { Action } from '@ngrx/store';

import { type } from '../utils';
import { MenuItem } from '../models';

export const ActionTypes = {
  NAVIGATION_TOGGLE_OPEN:   type('[Navigation] Toggle Open')
};

export class ToggleOpenAction implements Action {
  type = ActionTypes.NAVIGATION_TOGGLE_OPEN;
  constructor (public payload: MenuItem) {}
}

export type Actions
  = ToggleOpenAction;
