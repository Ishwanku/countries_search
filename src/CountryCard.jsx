import React from 'react';
import PropTypes from 'prop-types';
import './CountryCard.css';

const CountryCard = ({ name, flagUrl }) => {
  return (
    <div className="country-card">
      <h3>{name}</h3>
      <img src={flagUrl} alt={`Flag of ${name}`} className="country-flag" />
    </div>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flagUrl: PropTypes.string.isRequired,
};

export default CountryCard;
