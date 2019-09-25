import React, { useEffect } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Login from "./components/Login.js";
import PrivateRoute from "./components/PrivateRoute.js";
import CustomerDashboard from "./components/CustomerDashboard.js";
import FarmerDashboard from "./components/FarmerDashboard.js";
import OrderDetail from "./components/order/OrderDetail";
import FormikSignUp from "./components/Signup";
import { ShopList } from "./components/Shop/ShopList";
import { getUserData } from "./actions";

function App(props) {
  useEffect(() => {
    // console.log("APP", props);
    if (localStorage.getItem("token") !== "" && props.state.user.id === "") {
      props.getUserData();
    }
  }, []);

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
          <PrivateRoute exact path="/farmer" component={FarmerDashboard} />
          <PrivateRoute exact path="/dashboard/:id" component={OrderDetail} />
          <PrivateRoute exact path="/shop" component={ShopList} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { getUserData }
)(App);
