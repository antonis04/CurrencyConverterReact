import { useEffect, useState } from "react";
import apiConfig from "../config/apiConfig.json";

const API_URL = `https://api.currencyapi.com/v3/latest?apikey=${apiConfig.apiKey}&base_currency=USD`;

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(API_URL);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const { data, meta } = await response.json();

                if (!data || Object.keys(data).length === 0) {
                    throw new Error("No data received from API");
                }

                setRatesData({
                    state: "success",
                    rates: data,
                    date: meta.last_updated_at,
                });

            } catch (error) {
                console.error("Error fetching currency data:", error);
                
                setRatesData({
                    state: "error",
                    errorMessage: "Hmm.. Coś poszło nie tak 😕 Sprawdź, czy masz połączenie z internetem. Jeśli masz.. to wygląda na to, że to nasza wina. Możesz spróbuj później? 😊"
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};
