import React, { useEffect, useState } from "react";
import { fetchCountries } from "./utils/api";
import CountryCard from "./components/CountryCard";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Failed to fetch countries. Please try again later.");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const results = countries.filter((country) =>
      country.common && country.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(results);
  }, [searchTerm, countries]);

  return (
    <div className="App">
      <h1>Countries Search App</h1>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />
      <div className="countries-container">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <CountryCard key={country.common} name={country.common} flagUrl={country.png} />
          ))
        ) : (
          <p>{error ? error : "No countries found."}</p>
        )}
      </div>
    </div>
  );
};

export default App;