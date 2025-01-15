import React, { useEffect, useState, useMemo } from 'react';
import CountryCard from './CountryCard';

const API_URL = "https://0b9f457a-c7f4-4a28-9f68-2fe10314cedd.mock.pstmn.io/crio";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountries(data);
        console.log("Countries fetched successfully:", data);
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError("Failed to load countries. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = useMemo(() =>
    countries.filter(country =>
      country.common.toLowerCase().includes(search.toLowerCase())
    ), [countries, search]
  );

  return (
    <div className="countries">
      <input
        type="text"
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
        aria-label="Search for a country"
      />
      {loading && <p>Loading countries...</p>}
      {error && <p>{error}</p>}
      <div className="country-list">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <CountryCard key={index} name={country.common} flagUrl={country.png} />
          ))
        ) : (
          !loading && <p>No countries match your search or no data available.</p>
        )}
      </div>
    </div>
  );
};

export default Countries;
