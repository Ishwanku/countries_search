import React from 'react';
import PropTypes from 'prop-types';
import './CountryCard.css';

const CountryCard = ({ name, flagUrl }) => (
  <div className="countryCard">
    <img src={flagUrl} alt={`Flag of ${name}`} className="countryFlag" />
    <h3>{name}</h3>
  </div>
);

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flagUrl: PropTypes.string.isRequired,
};

export default CountryCard;
