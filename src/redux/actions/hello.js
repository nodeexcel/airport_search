import axios from 'axios';
// import { createAction } from 'redux-actions';

export const GET_ALL_AIRPORT = 'GET_ALL_AIRPORT';
export const GET_AIRPORT = 'GET_AIRPORT';
export const DISTANCE = 'DISTANCE';

const ROOT_URL = '/api';

export function requestAllAirports(id) {
  const request = axios.post(`/posts`);

  return {
    type: GET_ALL_AIRPORT,
    payload: request
  };
}
