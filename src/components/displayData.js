import React, { PropTypes } from 'react';
import _ from 'lodash';

const DisplayData = ({ data, category }) => {
  console.log(data, 'componetnt');
  let dataAirports = null;
  if (data.status === 0) {
    dataAirports = <h1> No Data Found.</h1>;
  } else {
    dataAirports = _.map(data.data, (o, i) => (
      <span key={i}> LocationID: {o.LocationID} - City: {o.City}<br /></span>
      )
    );
  }
  return (
    <div>
      {dataAirports}
    </div>
  );
};

DisplayData.propTypes = {
  data: PropTypes.Array,
  category: PropTypes.string
};

export default DisplayData;
