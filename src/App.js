import "./App.css";
import React from "react";
import { useCitiesList } from "./hooks/useCitiesList";
import { Input } from "./components/Input/Input";
import { CardList } from "./components/CardList/CardList";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className='container'>
        <div className='Main'>
          <Input />
          <CardList />
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
