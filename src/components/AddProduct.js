import React, { useState } from "react";
import "../css/ProductForm.css";
import { connect } from "react-redux";
import { addProduct } from "../redux/product/productActions";

const AddProduct = (props) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    props.addProduct(product);
    setProduct({ title: "", price: "", image: "" });
  };

  return (
    <div>
      <div className="formContainer">
        <div className="form">
          <div className="heading">
            <h5>Add Product</h5>
          </div>
          <div>
            <form onSubmit={handleFormSubmit} style={{ padding: "10px" }}>
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter Product Name"
                  value={product.title}
                  onChange={(e) =>
                    setProduct({ ...product, title: e.target.value })
                  }
                />
              </div>
              <div className="input">
                <input
                  type="number"
                  placeholder="Enter Price"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter Image Url"
                  value={product.image}
                  onChange={(e) =>
                    setProduct({ ...product, image: e.target.value })
                  }
                />
              </div>
              <button className="btnAdd">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProduct(product));
    },
    // addToCart: (product) => {
    //   dispatch(addToCart(product));
    // },
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
