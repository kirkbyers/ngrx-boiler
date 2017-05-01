import { exampleActions } from '../actions';

export interface State {
  counter: number;
  message: string;
};

const initialState: State = {
  counter: 0,
  message: null
};

export function reducer (state = initialState, action: exampleActions.Actions): State {
  switch (action.type) {
    case exampleActions.ActionTypes.EXAMPLE_CLEAR_MESSAGE:
      return Object.assign({}, state, {message: null});
    case exampleActions.ActionTypes.EXAMPLE_INC:
      return Object.assign({}, state, {counter: state.counter + 1});
    case exampleActions.ActionTypes.EXAMPLE_INC_SUCCESS:
      return Object.assign({}, state, {message: action.payload});
    case exampleActions.ActionTypes.EXAMPLE_RESET:
      return Object.assign({}, initialState);
    case exampleActions.ActionTypes.EXAMPLE_SET:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

export const getCounter = (state: State) => state.counter;
export const getMessage = (state: State) => state.message;
