import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const API_URL = "https://countries-search-data-prod-nnjjst7g5q-el.a.run.app/countries";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log('Fetching countries...');
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log('Countries fetched:', data);
                setCountries(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const filteredCountries = countries.filter(country => 
        country.common.toLowerCase().includes(search.toLowerCase())
    );

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
                {filteredCountries.map((country, index) => (
                    <CountryCard key={index} name={country.common} flagUrl={country.png} />
                ))}
            </div>
        </div>
    );
};

export default Countries;
