import React, { useContext, useState } from "react";
import { Card } from "../Card/Card";
import { GlobalContext } from "../../App";
import { useInfo } from "../../hooks/useWeather";
import "../../App.css";

export const CardList = () => {
  const [orderBy, setOrderBy] = useState("tempreature");
  const {
    state: { citiesList },
  } = useContext(GlobalContext);

  const changeFilter = (event) => {
    setOrderBy(event.target.value);
  };

  let info = [];
  for (let i = 0; i < citiesList.length; i++) {
    let data = citiesList[i];
    info.push(data);
  }
  console.log(info);
  const dataInfo = useInfo(info);
  if (!dataInfo) return null;
  const { name, weather, main } = dataInfo;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;
  console.log(dataInfo);
  console.log(temp.toFixed())

  let sortedList = citiesList;
  if (orderBy === "tempreature") {

  }

  return (
    <>
      <div className='filter'>
        <select className='select' value={orderBy} onChange={changeFilter}>
          <option value='tempreature'>По температуре</option>
          <option value='desc'>С конца</option>
        </select>
      </div>
      <div className='CardList'>
        {sortedList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </>
  );
};
