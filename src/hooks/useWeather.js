import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../settings";

export const useWeather = (city) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang={ru}`
    )
      .then((res) => {
        if (res.ok) return res.json();
        else return null;
        // var newcitiesList = JSON.parse(localStorage.getItem("citiesList"));
        // newcitiesList.pop();
        // localStorage.setItem("MyRecords", JSON.stringify(newcitiesList));
      })
      .then(setData);
  }, [city]);
  // console.log(data)
  return data;
};

export const useInfo = (info) => {
  const [dataInfo, setdataInfo] = useState(null);
  useEffect(() => {
    for (let i = 0; i < info.length; i++) {
      fetch(
        `${API_URL}/weather?q=${info[i]}&appid=${API_KEY}&units=metric&lang={ru}`
      )
        .then((res) => {
          if (res.ok) return res.json();
          else return null;
          // var newcitiesList = JSON.parse(localStorage.getItem("citiesList"));
          // newcitiesList.pop();
          // localStorage.setItem("MyRecords", JSON.stringify(newcitiesList));
        })
        .then(setdataInfo);
    }
  }, []);
  // console.log(info.length)
  return dataInfo;
};
