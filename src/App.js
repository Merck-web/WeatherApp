import "./App.css";
import React from "react";
import { useCitiesList } from "./hooks/useCitiesList";

import { Input } from "./components/Input/Input";
import { CardList } from "./components/CardList/CardList";

function App() {
  const [citiesList, setCitiesList] = useCitiesList();
  return (
    <div className='Main'>
      <Input setCitiesList={setCitiesList} />
      <div className='CardList'>{<CardList citiesList={citiesList} />}</div>
    </div>
  );
}

export default App;
