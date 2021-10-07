import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/ItemPage/Home";
import Cart from "./components/CartPage/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
          </Switch>
        </Provider>
      </Router>
    </>
  );
}

export default App;
