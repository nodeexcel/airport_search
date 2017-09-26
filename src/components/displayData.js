import React, { PropTypes } from 'react';

const DisplayData = ({ data, category }) =>
  <div>
    <p>Hello {category}</p>
  </div>;

DisplayData.propTypes = {
  data: PropTypes.string,
  category: PropTypes.string
};

export default DisplayData;
