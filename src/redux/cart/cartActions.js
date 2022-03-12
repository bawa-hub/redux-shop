import * as actionTypes from "./cartActionTypes";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      ...product,
      qty: 1,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: itemID,
  };
};

export const incrementQty = (itemID) => {
  console.log("Fron cartActions: ", itemID);
  return {
    type: actionTypes.INCREMENT_QTY,
    payload: itemID,
  };
};

export const decrementQty = (itemID) => {
  return {
    type: actionTypes.DECREMENT_QTY,
    payload: itemID,
  };
};
