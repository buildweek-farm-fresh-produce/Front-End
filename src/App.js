import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Route exact path="/" component={Main} />
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
