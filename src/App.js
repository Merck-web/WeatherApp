import "./App.css";
import React from "react";
import { useCitiesList } from "./hooks/useCitiesList";

import { Input } from "./components/Input/Input";
import { CardList } from "./components/CardList/CardList";

function App() {
  const [state, dispatch] = useCitiesList();
  const { inputValue, editingCity, citiesList } = state;
  return (
    <div className='container'>
      <div className='Main'>
        <Input dispatch={dispatch} inputValue={inputValue} editingCity={editingCity} />
        {<CardList citiesList={citiesList} dispatch={dispatch} />}
      </div>
    </div>
  );
}

export default App;
