import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProductGallery from "../ProductGallery";
import CartContainer from "../CartContainer";

import "./App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/cart">
          <CartContainer />
        </Route>
        <Route path="/">
          <ProductGallery />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
