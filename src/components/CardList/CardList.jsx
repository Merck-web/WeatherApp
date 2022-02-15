import React, { useContext, useState } from "react";
import { Card } from "../Card/Card";
import { GlobalContext } from "../../App";
import "../../App.css";

export const CardList = () => {
  const [orderBy, setOrderBy] = useState("asc");
  const {
    state: { citiesList },
  } = useContext(GlobalContext);

  const changeFilter = (event) => {
    setOrderBy(event.target.value);
  };

  let sortedList = citiesList.sort();
  if (orderBy === "desc") {
    sortedList.reverse();
  }

  return (
    <>
      <div className='filter'>
        <select className='select' value={orderBy} onChange={changeFilter}>
          <option value='asc'>С начала</option>
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
