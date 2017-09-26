import React, { PropTypes } from 'react';
import _ from 'lodash';

const DisplayData = ({ data, category }) => {
  let dataAirports = null;
  let currentCity = null;
  if (data.all !== undefined) {
    if (data.all.status === 0) {
      dataAirports = <h1> No Data Found.</h1>;
    } else {
      dataAirports = _.map(data.all.data, (o, i) => (<span key={i}> LocationID: {o.LocationID} - City: {o.City}<br /></span>));
    }
  } else if (data.airport !== undefined) {
    if (data.airport.data !== undefined) {
      currentCity = <div>LocationID: {data.airport.data.current.LocationID} - City: {data.airport.data.current.City} <hr /></div>;
      dataAirports = _.map(data.airport.data.near, (o, i) => (<span key={i}>{o.distance} -- LocationID: {o.LocationID} - City: {o.City}<br /></span>));
    } else {
      currentCity = <div>{data.airport.message}<hr /></div>;
    }
  } else if (data.distance !== undefined) {
    currentCity = data.distance.data ? <div>Distance: {data.distance.data.distance} <hr /></div> : <div> {data.distance.message} <hr /></div>;
  }
  return (
    <div>
      {currentCity}
      {dataAirports}
    </div>
  );
};

DisplayData.propTypes = {
  data: PropTypes.Array,
  category: PropTypes.string
};

export default DisplayData;
