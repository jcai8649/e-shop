import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shop/Shop";

function App() {
  const HatPage = () => <div>HatPage</div>;

  return (
    <div>
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
