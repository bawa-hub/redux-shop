import { ADD_PRODUCT } from "./productActionTypes";
import products from "../../dummyData/products";

const initialState = {
  products: products,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: Date.now() }],
      };
    default:
      return state;
  }
};

export default productReducer;
