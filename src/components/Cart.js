import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "../css/Cart.css";
function Cart(props) {
  const { cart, reduction, increase, remove, total, getTotal } = useContext(
    DataContext
  );
  useEffect(() => {
    getTotal();
  }, [cart]);

  return (
    <div className="Cart">
      <div className="cart_header">
        <h2>Shopping Cart</h2>
        <h3>{cart.length} Items</h3>
      </div>
      <div className="cart_ite">
        <span className="pro">product</span>
        <span className="quan">quantity</span>
        <span className="pri">price</span>
        <span className="tol">total</span>
      </div>
      <div className="cart_prod">
        {cart.map((item) => (
          <div className="item">
            <div className="item_info">
              <img src={item.src} alt="" />
              <div className="item_text">
                <span className="title">{item.title}</span>
                <span className="des">{item.description}</span>
              </div>
            </div>
            <div className="item_quantity">
              <button className="count" onClick={() => reduction(item._id)}>
                -
              </button>
              <span>{item.count}</span>
              <button className="count" onClick={() => increase(item._id)}>
                +
              </button>
              <div className="delete" onClick={() => remove(item._id)}>
                <DeleteForeverIcon />
              </div>
            </div>
            <div className="item_price">${item.price}</div>
            <div className="item_total">${item.price * item.count}</div>
          </div>
        ))}
      </div>
      <div className="cart_payment">
        <button>PAYMENT</button>
        <div className="total">
          TOTAL: <span>{`$${total}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
