import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const API_URL = "https://countries-search-data-prod-nnjjst7g5q-el.a.run.app/countries";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.common.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (filteredCountries.length === 0) {
      console.log("No countries match your search or no data available.");
    }
  }, [filteredCountries]);

  return (
    <div className="countries">
      <input
        type="text"
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      <div className="country-list">
      </div>
    </div>
  );
};

export default Countries;
