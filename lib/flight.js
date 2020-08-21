import { useState, useEffect } from "react";

export async function fetchFlight() {
  if (typeof window !== "undefined" && window.__flight) {
    return window.__flight;
  }

  const res = await fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-09-01?inboundpartialdate=2020-12-01`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "c573d899fbmsh7f790eccbfa07a7p17edf7jsnf6b3cf11be53"
      }
    }
  );

  if (!res.ok) {
    delete window.__flight;
    return null;
  }

  const json = await res.json();
  if (typeof window !== "undefined") {
    window.__flight = json;
  }

  return json;
}

export function useFetchFlight() {
  const [loadingFlight, setLoadingFlight] = useState(
    () => !(typeof window !== "undefined" && window.__flight)
  );
  const [flight, setFlight] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }

    return window.__flight || null;
  });

  useEffect(() => {
    if (!loadingFlight && flight) {
      return;
    }
    setLoadingFlight(true);
    let isMounted = true;

    fetchFlight().then(flight => {
      if (isMounted) {
        setFlight(flight);
        setLoadingFlight(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { flight, loadingFlight };
}
