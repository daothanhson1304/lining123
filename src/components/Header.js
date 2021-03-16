import React, { useContext, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import "../css/Header.css";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  const { cart } = useContext(DataContext);
  function menuToggle() {
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <div>
      <header>
        <div className="menu" onClick={menuToggle}>
          <MenuIcon />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">Nike</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li onClick={menuToggle} className="header-toggle">
              <div className="close">
                <ArrowBackIosIcon />
              </div>
              <div className="service">
                <Link to="/">Services</Link>
              </div>
            </li>
            <li>
              <Link className="abc" to="/men">
                men
              </Link>
            </li>
            <li>
              <Link className="abc" to="/womens">
                womens
              </Link>
            </li>
            <li>
              <Link className="abc" to="/kids">
                kids
              </Link>
            </li>
            <li>
              <Link className="abc" to="/product">
                products
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="account">
            <AccountCircleIcon />
          </div>
          <div className="cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
