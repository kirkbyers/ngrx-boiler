import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';

import { environment } from '../../environments/environment';

import * as fromExample from './example';
import * as fromNavigation from './navigation';

export interface State {
  example: fromExample.State;
  navigation: fromNavigation.State;
};

const reducers = {
  example: fromExample.reducer,
  navigation: fromNavigation.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getExample = (state: State) => state.example;
export const getExampleCounter = createSelector(getExample, fromExample.getCounter);
export const getExampleMessage = createSelector(getExample, fromExample.getMessage);

export const getNavigation = (state: State) => state.navigation;
export const getNavigationItems = createSelector(getNavigation, fromNavigation.getMenuLinks);
