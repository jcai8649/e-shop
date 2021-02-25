import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";

function App() {
  const HatPage = () => <div>HatPage</div>;

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
