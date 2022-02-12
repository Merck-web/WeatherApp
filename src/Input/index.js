import React, { useState } from "react";

import "../App.css";

export const Input = ({ setCitiesList }) => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event) => {
    console.log(event);
    setInputValue(event.target.value);
  };
  const handleOnClick = () => {
    setCitiesList((curentArray) => [...curentArray, inputValue]);
  };
  const clearInputValue = (event) => {
    setInputValue((event.target.value = ""));
  };

  return (
    <div className='InputWrap'>
      <input className='Input' onChange={handleOnChange} value={inputValue} />
      <button className='Button' onClick={clearInputValue}>Очистить</button>
      <button className='Button' onClick={handleOnClick}>
        Добавить
      </button>
    </div>
  );
};
