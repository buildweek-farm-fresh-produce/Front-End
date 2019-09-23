import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
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
