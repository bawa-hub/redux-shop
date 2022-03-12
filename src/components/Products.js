import React from "react";
import "../css/Products.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart/cartActions";

const Products = (props) => {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="productsContainer">
        {/* {console.log("porducts: ", props.products)} */}
        {props.products.map((item, index) => (
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
            <h6 style={{ marginTop: "4px", fontSize: "16px" }}>{item.title}</h6>
            <h6>&#8377;{item.price}</h6>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <button onClick={() => props.addToCart(item)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
