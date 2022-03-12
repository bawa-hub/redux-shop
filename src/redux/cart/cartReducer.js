import * as actionTypes from "./cartActionTypes";

const INITIAL_STATE = {
  cart: [
    // {
    //   id: 0,
    //   title: "Demo",
    //   price: 100,
    //   image:
    //     "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-onions-main-image-700-350-8425535.jpg?quality=90&resize=768,574",
    //   qty: 1,
    // },
  ],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // check if item is already in cart
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, action.payload],
      };

    case actionTypes.INCREMENT_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case actionTypes.DECREMENT_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, qty: item.qty > 0 ? item.qty - 1 : item.qty }
            : item
        ),
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
