import React, { useRef, useState } from "react";

import "../../App.css";

export const Input = ({ dispatch }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const handleOnChange = (event) => {
    setInputValue(event.target.value); //берем value из input в переменную inputValue
  };
  const handleOnClick = () => {
    // setCitiesList((curentArray) => [...curentArray, inputValue]); //создаем новый массив который наполняется предыдущим + новое значени inputValue
    dispatch({
      type: 'ADD_CITY',
      payload: inputValue
    })
    inputRef.current.focus();
    setInputValue("");
  };
  const clearInputValue = () => {
    setInputValue("");
    inputRef.current.focus();
  };

  return (
    <div className='InputWrap'>
      <input
        className='Input'
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      <button className='Button' onClick={clearInputValue}>
        Очистить
      </button>
      <button className='Button' onClick={handleOnClick}>
        Добавить
      </button>
    </div>
  );
};
