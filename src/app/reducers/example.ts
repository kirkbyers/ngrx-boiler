import { exampleActions } from '../actions';

export interface State {
  counter: number;
};

const initialState: State = {
  counter: 0
};

export function reducer (state = initialState, action: exampleActions.Actions): State {
  switch (action.type) {
    case exampleActions.ActionTypes.EXAMPLE_SET:
      return Object.assign({}, {counter: action.payload});
    default:
      return state;
  }
}

export const getCounter = (state: State) => state.counter;
