import apiConfig from "../config/apiConfig.json";

export const API_BASE_URL = "https://api.currencyapi.com/v3";
export const API_KEY = apiConfig.apiKey;

export const ENDPOINTS = {
  latest: `${API_BASE_URL}/latest`,
};
