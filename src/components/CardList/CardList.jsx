import React, { useContext } from "react";
import { Card } from "../Card/Card";
import { GlobalContext } from "../../App";
import "../../App.css";

export const CardList = () => {
  const {
    state: { citiesList },
  } = useContext(GlobalContext);
  return (
    <div className='CardList'>
      {citiesList.map((city) => (
        <Card key={city} city={city} />
      ))}
    </div>
  );
};
