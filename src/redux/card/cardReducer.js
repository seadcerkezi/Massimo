import { ADD, ADDFAV, ADDORDER, DELETE, REMOVEFAV } from "./cardTypes";

const initialState = {
  cardItems: [],
  favItems: [],
  orders: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const exist = state.cardItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.options.title === action.payload.options.title
      );
      if (exist) {
        return {
          ...state,
          cardItems: state.cardItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cardItems: [...state.cardItems, action.payload],
        };
      }
    case DELETE:
      return {
        ...state,
        cardItems: state.cardItems.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.options.title !== action.payload.option
        ),
      };

    case ADDFAV:
      const isexist = state.favItems.find(
        (item) => item.id === action.payload.id
      );
      if (isexist) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favItems: [...state.favItems, action.payload],
        };
      }
    case REMOVEFAV:
      return {
        ...state,
        favItems: state.favItems.filter((item) => item.id !== action.payload),
      };
    case ADDORDER:
      return {
        ...state,
        cardItems: [],
        orders: [...state.orders, action.payload],
      };

    default:
      return state;
  }
};

export default cardReducer;
