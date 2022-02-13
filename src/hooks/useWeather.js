import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../settings";

export const useWeather = (city) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang={ru}`
    )
      .then((res) => res.json())
      .then(setData);
  }, [city]);
  return data;
};
