import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Login from "./components/Login.js";
import PrivateRoute from "./components/PrivateRoute.js";
import CustomerDashboard from "./components/CustomerDashboard.js";
import OrderDetail from "./components/order/OrderDetail";
// import Register from "./components/Register.js";
import FormikSignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/signup" component={FormikSignUp} />
          <PrivateRoute exact path="/dashboard" component={CustomerDashboard} />
          <PrivateRoute exact path="/dashboard/:id" component={OrderDetail} />
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
