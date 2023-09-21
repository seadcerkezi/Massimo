import { ADD, ADDFAV, ADDORDER, DELETE, REMOVEFAV } from "./cardTypes";

export const add = (item) => {
  return {
    type: ADD,
    payload: item,
  };
};

export const deleteItem = (item) => {
  return {
    type: DELETE,
    payload: item,
  };
};
export const addToFav = (item) => {
  return {
    type: ADDFAV,
    payload: item,
  };
};
export const removeFromFav = (id) => {
  return {
    type: REMOVEFAV,
    payload: id,
  };
};
export const addToOrders = (item) => {
  return {
    type: ADDORDER,
    payload: item,
  };
};
