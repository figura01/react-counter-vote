import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ total }) => (
  <div
    className="counter"
  >
    <p>{total} vote{total > 1 ? 's' : ''}</p>
  </div>
);

Counter.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Counter;
