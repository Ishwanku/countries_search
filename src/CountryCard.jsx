import React from "react";

const CountryCard = ({ name, flagUrl }) => {
  return (
    <div className="countryCard">
      <img src={flagUrl} alt={`${name} flag`} />
      <h2>{name}</h2>
    </div>
  );
};

export default CountryCard;
