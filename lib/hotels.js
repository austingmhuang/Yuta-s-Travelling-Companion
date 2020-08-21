import { useState, useEffect } from "react";
// require("dotenv").config();

// const apiKey = process.env.PROJECT_API_KEY;

export async function fetchHotel(destinationId, checkOut) {
  if (typeof window !== "undefined" && window.__hotel) {
    return window.__hotel;
  }
  const res = await fetch(
    `https://hotels4.p.rapidapi.com/properties/list?currency=USD&locale=en_US&sortOrder=PRICE&destinationId=${destinationId}&pageNumber=1&checkIn=2020-01-08&checkOut=${checkOut}&pageSize=5&adults1=1`,
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
    fetchHotel("1493604", "2020-01-15").then(hotel => {
      if (isMounted) {
        setHotel(hotel);
        setLoadingHotel(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);
  console.log("hotel in lib", hotel);
  return { hotel: hotel, loadingHotel: loadingHotel };
}
