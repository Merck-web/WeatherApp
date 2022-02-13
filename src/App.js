import "./App.css";
import React from "react";
import { useCitiesList } from "./hooks/useCitiesList";

import { Input } from "./components/Input/Input";
import { CardList } from "./components/CardList/CardList";

function App() {
  const [citiesList, dispatch] = useCitiesList();
  return (
    <div className='Main'>
      <Input dispatch={dispatch} />
      <div className='CardList'>
        {<CardList citiesList={citiesList} dispatch={dispatch} />}
      </div>
    </div>
  );
}

export default App;
