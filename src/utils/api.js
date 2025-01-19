export const fetchCountries = async () => {
    const API_URL =
      "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };