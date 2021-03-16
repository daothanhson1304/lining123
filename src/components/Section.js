import React from "react";
import Products from "./Products";
import Details from "./Details";
import { Route, Router } from "react-router-dom";
import Cart from "./Cart";
function Section(props) {
  return (
    <section>
      <Route path="/product" component={Products} exact />
      <Route path="/product/:id" component={Details} />
      <Route path="/cart" component={Cart} />
    </section>
  );
}

export default Section;
