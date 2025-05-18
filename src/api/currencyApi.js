import { API_KEY, ENDPOINTS } from "./config";

export const fetchExchangeRates = async (baseCurrency = "USD") => {
  const url = `${ENDPOINTS.latest}?apikey=${API_KEY}&base_currency=${baseCurrency}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const data = await response.json();
  
  if (!data.data || Object.keys(data.data).length === 0) {
    throw new Error("No data received from API");
  }
  
  return data;
};
