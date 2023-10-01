import { CHANGEPRODUCT } from "./cardTypes";

export const changeProductData = (item) => {
  return {
    type: CHANGEPRODUCT,
    payload: item,
  };
};
