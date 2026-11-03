import React from 'react';
import PropTypes from 'prop-types';
import './CountryCard.css';

const CountryCard = ({ name, flagUrl }) => {
  return (
    <div className="countryCard">
      <img src={flagUrl} alt={`Flag of ${name}`} className="country-flag" />
      <h2 className="country-name">{name}</h2>
    </div>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flagUrl: PropTypes.string.isRequired,
};

export default CountryCard;
