import { useEffect, useState } from "react";
import { fetchExchangeRates } from "../api/currencyApi";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const { data, meta } = await fetchExchangeRates();

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

        setTimeout(getRates, 1000);
    }, []);

    return ratesData;
};
