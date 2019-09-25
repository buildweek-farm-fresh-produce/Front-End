import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { axiosWithAuth } from "./utils/axiosWithAuth";
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
import { ShopList } from "./components/Shop/ShopList";
import InventoryCard from "./components/InventoryCard";
import Inventory from "./components/Inventory";

function App() {

  const [inventory, setInventory] = useState([]);
  useEffect(() => {
  
  axios
  .get( `https://farm-fresh-bw.herokuapp.com/api/farmers/produce/${localStorage.getItem("id")}`)
  .then(response => {
  console.log("farmer response:", response.data.current_stock)
  setInventory(response.data.current_stock)
  })
  .catch(err => console.log(err));
  
  },[])
  

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
          <PrivateRoute exact path="/shop" component={ShopList} />
          <Route exact path="/inventory" render={props => (<InventoryCard {...props} items={inventory}/>)} />
          <Route exact path="inventory/:id" render={props => <Inventory {...props} items={inventory} />}/>
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