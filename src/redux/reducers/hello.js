import { handleActions } from 'redux-actions';

export const initialState = {
  all: [],
  airport: { adadas: 'asdad' },
  distance: {}
};

export const hello = handleActions({
  GET_ALL_AIRPORT: (state, action) => ({ all: action.payload }),
  GET_AIRPORT: (state, action) => ({ airport: action.payload }),
  DISTANCE: (state, action) => ({ distance: action.payload })
}, initialState);
