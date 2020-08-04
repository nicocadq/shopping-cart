import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';

import ProductGalery from '../ProductGalery';
import CartContainer from '../CartContainer';

const App = (props) => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cart">
            <CartContainer />
          </Route>
          <Route path="/">
            <ProductGalery />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
