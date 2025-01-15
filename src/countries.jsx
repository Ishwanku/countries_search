import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import "./App.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countries-search-data-prod-nnjjst7g5q-el.a.run.app/countries"
        );
        const data = await response.json();
        const sortedData = data.sort((a, b) =>
          a.common.localeCompare(b.common)
        );
        setCountries(sortedData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = searchTerm
    ? countries.filter((country) =>
        country.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;

  return (
    <div className="app">
      <h1>Country Search</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />
      <div className="countriesContainer">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.common}
            flag={country.png}
            name={country.common}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
