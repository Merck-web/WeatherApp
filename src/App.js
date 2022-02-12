import "./App.css";
import React, { useState } from "react";

import { Input } from "./components/Input/Input";
import { Card } from "./components/Card/Card";

function App() {
  const [citiesList, setCitiesList] = useState([]);
  return (
    <div className='Main'>
      <Input setCitiesList={setCitiesList} />
      <div className='CardList'>
        {citiesList.map((city) => (
          <Card key={city} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
