import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import { Route, Link } from "react-router-dom";
import InventoryCard from "./components/InventoryCard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Route exact path="/" component={Main} />
        <Route path="/inventory" component={InventoryCard} />
        <Link to="/inventory">Inventory</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    stateObj: state.Obj
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
