import { createAction } from 'redux-actions';
import axios from 'axios';


const URL = 'http://192.168.1.23:3015';


export const GET_ALL_AIRPORT = 'GET_ALL_AIRPORT';

export const requestAirport = createAction('GET_AIRPORT');
export const requestDistance = createAction('DISTANCE');


function getAllAirports() {
  const request = axios.get(URL + `/get_all_airports`);
  return request;
}

export function requestAllAirports() {
  return function (dispatch, getState) {
    return new Promise((resolve, reject) => {
      getAllAirports().then((json) => {
        console.log(json, 'json');
        if (json.error === 0) {
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
