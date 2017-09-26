import { createAction } from 'redux-actions';
import axios from 'axios';

const URL = 'http://localhost:3015';

export const GET_ALL_AIRPORT = 'GET_ALL_AIRPORT';
export const GET_AIRPORT = 'GET_AIRPORT';
export const DISTANCE = 'DISTANCE';

function getAllAirports() { return axios.get(URL + `/get_all_airports`); }

export function requestAllAirports() {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      getAllAirports().then((json) => {
        if (json.error === 1) {
          dispatch(createAction('GET_ALL_AIRPORT')(json.data));
        } else {
          dispatch(createAction('GET_ALL_AIRPORT')(json.data));
        }
      }, (error) => {
        dispatch(createAction('GET_ALL_AIRPORT')(error));
      });
    });
  };
}

function getAirport(data) { return axios.get(URL + `/nearest_airport?airport=` + data); }

export function requestAirport(data) {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      getAirport(data).then((json) => {
        if (json.status === 1) {
          dispatch(createAction('GET_AIRPORT')(json));
        } else {
          dispatch(createAction('GET_AIRPORT')(json.data));
        }
      }, (error) => {
        dispatch(createAction('GET_AIRPORT')(error));
      });
    });
  };
}

function getDistance(a, b) { return axios.get(URL + `/get_distance?airport_one=` + a + '&airport_two=' + b); }

export function requestDistance(a, b) {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      getDistance(a, b).then((json) => {
        if (json.status === 1) {
          dispatch(createAction('DISTANCE')(json));
        } else {
          dispatch(createAction('DISTANCE')(json.data));
        }
      }, (error) => {
        dispatch(createAction('DISTANCE')(error));
      });
    });
  };
}
