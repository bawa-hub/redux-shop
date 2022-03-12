import * as actionTypes from "./productActionTypes";

export const addProduct = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: product,
  };
};
