import { useEffect, useReducer } from "react";

const initialState = {
  inputValue: "",
  editingCity: "",
  citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
  orderBy: "name",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY": {
      const newState = {
        ...state,
        citiesList: [...state.citiesList, action.payload],
        fullInfo: [action.payload]
      };
      return newState;
    }
    case "REMOVE_CITY_CARD": {
      const oldArray = state.citiesList;
      const newArray = oldArray.filter((el) => el !== action.payload);
      return { ...state, citiesList: newArray };
    }
    case "EDIT_CITY_CARD": {
      return {
        ...state,
        inputValue: action.payload,
        editingCity: action.payload,
      };
    }
    case "EDIT_CITY_DONE": {
      const { editingCity } = state;
      const oldArray = state.citiesList;
      const filterArray = oldArray.filter((el) => el !== editingCity);
      const newArray = [...filterArray, action.payload];
      return {
        ...state,
        citiesList: newArray,
        inputValue: "",
        editingCity: "",
      };
    }
    case "CHANGE_INPUT_VALUE": {
      return { ...state, inputValue: action.payload };
    }
    case "RESET_INPUT": {
      return { ...state, inputValue: initialState.inputValue };
    }
    default:
      return initialState;
  }
};

export const useCitiesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { citiesList } = state;
  useEffect(() => {
    localStorage.setItem("citiesList", JSON.stringify(citiesList));
  }, [citiesList]);
  return [state, dispatch];
};
