import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import "../css/Products.css";
function Products(props) {
  const { products, addCart } = useContext(DataContext);
  return (
    <div id="product">
      {products.map((product) => (
        <div className="cart_product" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.src} className="img" alt="" />
          </Link>
          <div className="content">
            <h2>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h2>
            <span>${product.price}</span>
            <div className="colors">
              {product.colors.map((item, index) => (
                <span
                  key={index}
                  style={{ background: item }}
                  className="color"
                ></span>
              ))}
            </div>
            <button className="btn" onClick={() => addCart(product._id)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
