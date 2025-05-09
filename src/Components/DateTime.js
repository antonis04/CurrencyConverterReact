import React, { useState, useEffect } from "react";

function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Aktualizacja czasu co sekundę
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Czyszczenie interwału przy odmontowaniu komponentu
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString("pl-PL", options);
  };

  return <div className="date-time">{formatDateTime(currentDateTime)}</div>;
}

export default DateTime;
