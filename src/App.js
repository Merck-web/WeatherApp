import "./App.css";
import React from "react";
import { useCitiesList } from "./hooks/useCitiesList";
import { Input } from "./components/Input/Input";
import { CardList } from "./components/CardList/CardList";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <div className='container'>
          <div className='Main'>
            <Input />
            <ErrorBoundary>
              <CardList />
            </ErrorBoundary>
          </div>
        </div>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
