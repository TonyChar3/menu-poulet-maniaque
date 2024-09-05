import { createContext, useContext, useReducer, useEffect } from "react";
import { items_array } from "@/article_menu";

const initialState = {
  menu_items: [],
  data_loading: false,
  user_scrolling: false,
};

const AppContext = createContext();

export const useMyContext = () => {
  return useContext(AppContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU_ITEMS_LIST":
      return {
        ...state,
        menu_items: action.payload.menu_items_array,
      };
    case "DATA_LOADING":
      return {
        ...state,
        data_loading: action.payload.isLoading || false,
      };
    case "USER_IS_SCROLLING":
      return {
        ...state,
        user_scrolling: true,
      };
    case "USER_IS_NOT_SCROLLING":
      return {
        ...state,
        user_scrolling: false,
      };
    default:
      return state;
  }
};

export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAllItems = async () => {
    dispatch({ type: "DATA_LOADING", payload: { isLoading: true } });
    dispatch({
      type: "SET_MENU_ITEMS_LIST",
      payload: { menu_items_array: items_array },
    });
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
