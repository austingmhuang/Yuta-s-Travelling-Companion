import { useState, useEffect } from "react";
// require("dotenv").config();

// const apiKey = process.env.PROJECT_API_KEY;

export async function fetchHotel() {
  if (typeof window !== "undefined" && window.__hotel) {
    return window.__hotel;
  }
  const res = await fetch(
    `https://hotels4.p.rapidapi.com/properties/list?currency=USD&locale=en_US&sortOrder=PRICE&destinationId=1506246&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=3&adults1=1`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "f3b72532e5mshf3212aa087d7ef8p170d42jsnb3b9bd882b75"
      }
    }
  );
  if (!res.ok) {
    delete window.__hotel;
    return null;
  }
  const json = await res.json();
  if (typeof window !== "undefined") {
    window.__hotel = json;
  }
  return json;
}
export function useFetchHotel() {
  const [loadingHotel, setLoadingHotel] = useState(
    () => !(typeof window !== "undefined" && window.__hotel)
  );
  const [hotel, setHotel] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return window.__hotel || null;
  });
  useEffect(() => {
    if (!loadingHotel && hotel) {
      return;
    }
    setLoadingHotel(true);
    let isMounted = true;
    fetchHotel().then(hotel => {
      if (isMounted) {
        setHotel(hotel);
        setLoadingHotel(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);
  console.log(hotel);
  return { hotel: hotel, loadingHotel: loadingHotel };
}
