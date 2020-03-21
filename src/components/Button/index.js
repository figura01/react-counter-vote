import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, count, onVoteClick }) => (
  <button
    className="button  vote"
    type="button"
    name={name}
    onClick={onVoteClick}
  >
    {name} ({ count })
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onVoteClick: PropTypes.func.isRequired,
};

export default Button;
