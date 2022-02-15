import React, { useRef } from "react";

import "../../App.css";

export const Input = ({ dispatch, inputValue, editingCity }) => {
  const inputRef = useRef(null);
  const handleOnChange = (event) => {
    dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: event.target.value,
    });
  };
  const handleOnAdd = () => {
    if (inputValue.length) {
      dispatch({
        type: "ADD_CITY",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT",
        payload: inputValue,
      });
      inputRef.current.focus();
    }
  };

  const clearInputValue = () => {
    dispatch({
      type: "RESET_INPUT",
      payload: inputValue,
    });
    inputRef.current.focus();
  };

  const handleOnDone = () => {
    inputRef.current.focus();
    if (inputValue.length) {
      dispatch({
        type: "EDIT_CITY_DONE",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT",
        payload: inputValue,
      });
    }
  };
  return (
    <div className='InputWrap'>
      <input
        className='Input'
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      <button className='ButtonLeft' onClick={clearInputValue}>
        Очистить
      </button>
      {editingCity ? (
        <button className='Button' onClick={handleOnDone}>
          Изменить
        </button>
      ) : (
        <button className='Button' onClick={handleOnAdd}>
          Добавить
        </button>
      )}
    </div>
  );
};
