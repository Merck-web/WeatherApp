import React from "react";
import { Input } from "../Input/Input";
import { CardList } from "../CardList/CardList";
import { ErrorBoundary } from "react-error-boundary";
import "../../App.css";

export const AllCity = () => {
  return (
    <div className='container'>
      <div className='Main'>
        <Input />
        <ErrorBoundary>
          <CardList />
        </ErrorBoundary>
      </div>
    </div>
  );
};
