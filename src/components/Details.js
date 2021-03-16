import React, { useContext, useEffect, useState } from "react";
import "../css/Details.css";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
function Details(props) {
  const [product, setProduct] = useState([]);
  const { products, addCart } = useContext(DataContext);
  function getProduct() {
    if (props.match.params.id) {
      const data = products.filter((item) => {
        return item._id === props.match.params.id;
      });
      setProduct(data);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="details">
      {product.map((product) => (
        <div className="nike">
          <div className="details_product" key={product._id}>
            <div className="details_left">
              <div className="text">
                <h2>{product.title}</h2>
                <p>{product.content}</p>
              </div>
              <button
                onClick={() => {
                  addCart(product._id);
                }}
              >
                Add to cart
              </button>
            </div>
            <img src={product.src} className="details_img" alt="" />
            <div className="details_right">
              <span className="price">${product.price}</span>
              <div className="colorss">
                <span className="color_text">Sellect color</span>
                <div className="color_content">
                  {product.colors.map((item, index) => (
                    <span
                      key={index}
                      style={{ background: item }}
                      className="color2"
                    ></span>
                  ))}
                </div>
              </div>
              <div className="sizes">
                <span className="size_text">sellect size</span>
                <div className="size_content">
                  {product.size.map((item, index) => (
                    <span className="size" key={index}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
