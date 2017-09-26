import { createAction } from 'redux-actions';

export const requestAllAirports = createAction('GET_ALL_AIRPORT');
export const requestAirport = createAction('GET_AIRPORT');
export const requestDistance = createAction('DISTANCE');
