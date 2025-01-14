import React from 'react';
import PropTypes from 'prop-types';
import './CountryCard.css';

const CountryCard = ({ name, flagUrl }) => {
  return (
    <div className="countryCard">
      <h3>{name}</h3>
      <img src={flagUrl} alt={`${name} flag`} className="countryFlag" />
    </div>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flagUrl: PropTypes.string.isRequired,
};

export default CountryCard;
