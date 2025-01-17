import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import './App.css';

const API_URL = "https://countries-search-data-prod-nnjjst7g5q-el.a.run.app/countries";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
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
                    <div key={country.common} className="countryContainer">
                        <CountryCard
                            flagUrl={country.png}
                            name={country.common}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countries;