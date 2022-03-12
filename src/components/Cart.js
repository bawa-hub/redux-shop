import React, { useEffect, useState } from "react";
import "../css/Products.css";
import { connect } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/cart/cartActions";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

const Cart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let price = 0;

    props.cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalItems(props.cart.length);
    setTotalPrice(price);
  }, [props.cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <div>
      <div style={{ padding: "12px" }}>
        <h3>Cart</h3>
        <h6>TOtal Items: {totalItems}</h6>
        <h6>Subtotal: {totalPrice}</h6>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexWrap: "wrap",
          padding: "12px",
        }}
      >
        {props.cart.map((item, index) =>
          item.qty > 0 ? (
            <div className="product" key={index}>
              <div
                style={{
                  width: "100%",
                  height: "150px",
                }}
              >
                <img
                  src={item.image}
                  style={{ width: "100%", height: "100%" }}
                  alt="image"
                />
              </div>
              {/* <h6>Id - {item.id}</h6> */}
              <h6 style={{ marginTop: "4px", fontSize: "16px" }}>
                {item.title}
              </h6>
              <h6>&#8377;{item.price}</h6>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  <div
                    onClick={() => props.incrementQty(item.id)}
                    style={{
                      borderRadius: "4px",
                      borderWidth: "2px",
                      borderColor: "red",
                      border: "1px solid red",
                      backgroundColor: "white",
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </div>
                  <div>{item.qty}</div>
                  <div
                    onClick={() => props.decrementQty(item.id)}
                    style={{
                      borderRadius: "4px",
                      borderWidth: "2px",
                      borderColor: "red",
                      border: "1px solid red",
                      backgroundColor: "white",
                      width: "25px",
                      height: "25px",
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </div>
                </div>
                <div onClick={() => props.removeFromCart(item.id)}>
                  <DeleteIcon fontSize="small" />
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementQty: (itemID) => {
      dispatch(incrementQty(itemID));
    },
    decrementQty: (itemID) => {
      dispatch(decrementQty(itemID));
    },
    removeFromCart: (itemID) => {
      dispatch(removeFromCart(itemID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
