import "./App.css";
import React, { useState } from "react";

import { Input } from "./components/Input/Input";
import { CardList } from "./components/CardList/CardList";

function App() {
  const [citiesList, setCitiesList] = useState([]);
  return (
    <div className='Main'>
      <Input setCitiesList={setCitiesList} />
      <div className='CardList'>
        {<CardList citiesList={citiesList} />}
      </div>
    </div>
  );
}

export default App;
