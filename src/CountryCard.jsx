import React from "react";
import "./CountryCard.css";


const CountryCard = ({ flag, name }) => {
  return (
    <div className="countryCard">
      <img src={flag} alt={`${name} flag`} className="countryFlag" />
      <p className="countryName">{name}</p>
    </div>
  );
};

export default CountryCard;
