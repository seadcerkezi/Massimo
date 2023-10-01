import {
  LOGIN,
  LOGOUT,
  ADD,
  ADDFAV,
  ADDORDER,
  DELETE,
  REMOVEFAV,
  CHANGESTATUS,
} from "./userTypes";

export const logIn = (id) => {
  return {
    type: LOGIN,
    payload: id,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

export const add = (item, userId) => {
  return {
    type: ADD,
    payload: { item, userId },
  };
};

export const deleteItem = (item, userId) => {
  return {
    type: DELETE,
    payload: { item, userId },
  };
};
export const addToFav = (item, userId) => {
  return {
    type: ADDFAV,
    payload: { item, userId },
  };
};
export const removeFromFav = (productId, userId) => {
  return {
    type: REMOVEFAV,
    payload: { productId, userId },
  };
};
export const addToOrders = (item, userId) => {
  return {
    type: ADDORDER,
    payload: { item, userId },
  };
};

export const changeStatus = (orderId, userId) => {
  return {
    type: CHANGESTATUS,
    payload: { orderId, userId },
  };
};
