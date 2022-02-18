import React from "react";
import { Link, useParams } from "react-router-dom";

import "../../App.css";
import { Card } from "../Card/Card";

export const SingleCity = () => {
  const { city } = useParams();
  console.log(city);
  return (
    <>
      <button>
        <Link to={"/WeatherApp"}>Назад</Link>
      </button>
      <Card city={city} />
    </>
  );
};
