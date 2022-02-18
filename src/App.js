import "./App.css";
import React from "react";
import { useCitiesList } from "./hooks/useCitiesList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SingleCity } from "./components/SingleCity/SingleCity";
import { AllCity } from "./components/AllCity/AllCity";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path='/WeatherApp' element={<AllCity />} />
          <Route path='/city/:city' element={<SingleCity />} />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
