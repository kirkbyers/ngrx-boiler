import { SubMenuItem } from '../models';
import { navigationActions } from '../actions';

export interface State {
  home: {
    id: number;
    key: string;
    title: string;
    url: string;
  };
  page1: {
    id: number;
    key: string;
    title: string;
    url: string;
    subItems:  SubMenuItem[];
    open: boolean;
  };
  page2: {
    id: number;
    key: string;
    title: string;
    url: string;
  };
};

const initialState: State = {
  home: {
    id: 0,
    key: 'home',
    title: 'Home',
    url: '/'
  },
  page1: {
    id: 1,
    key: 'page1',
    title: 'Page 1',
    url: '/page1',
    subItems: [
      {
        id: 0,
        title: 'Sub Item 1',
        url: '/page1/sub1'
      },
      {
        id: 1,
        title: 'Sub Item 2',
        url: '/page1/sub2'
      }
    ],
    open: false
  },
  page2: {
    id: 2,
    key: 'page2',
    title: 'Page 2',
    url: '/page2'
  }
};

export function reducer (state = initialState, action: navigationActions.Actions): State {
  switch (action.type) {
    case navigationActions.ActionTypes.NAVIGATION_TOGGLE_OPEN:
      if (action.payload.key) {
        return Object.assign({}, state, {
          [action.payload.key]: Object.assign({}, state[action.payload.key], {
            open: !state[action.payload.key].open
          })
        });
      }
      return state;
    default:
      return state;
  }
}


export const getMenuLinks = (state: State) => {
  return Object.keys(state)
    .map((stateKey) => Object.assign({}, state[stateKey], {key: stateKey}));
};
