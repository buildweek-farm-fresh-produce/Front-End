import React, { useState, useEffect } from "react";
import "../App.scss";
import { connect } from "react-redux";
import Order from "./order/Order";
import Cart from "./order/Cart";
import LocalFarms from "./order/LocalFarms";
import LocalProduce from "./order/LocalProduce";

function CustomerDashboard() {
  useEffect(props => {
    // Should be sent to an AC
    // axiosWithAuth()
    //   .get("/login", props.credentials)
    //   .then(res => {
    //     console.log("ORDERS", res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="orders">
          <h3>Shopping Cart</h3>
          <Cart />
          <h3>Past Orders</h3>
          <Order
            orders={orders.filter(item => {
              if (item.consumer_id === localStorage.getItem("id")) {
                return item;
              }
            })}
          />
        </div>
        <div className="sideBar">
          <div className="top">
            <h3>Local Farms</h3>
          </div>
          {/* <div className="showFarm">
            <LocalFarms />
          </div> */}
          <div className="showProduce">
            <LocalProduce />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    authLoading: state.authLoading,
    user: state.user
  };
};

const orders = [
  {
    id: "supersecret1",
    shipping_address: "123 Main St.",
    purchase_date: "2019-08-06",
    delivered: 0,
    consumer_id: 4
  },
  {
    id: "supersecret12",
    shipping_address: "223 Beach St.",
    purchase_date: "2019-03-04",
    delivered: 1,
    consumer_id: 20
  },
  {
    id: "supersecret123",
    shipping_address: "323 Main St.",
    purchase_date: "2018-12-12",
    delivered: 0,
    consumer_id: 2
  },
  {
    id: "supersecret1234",
    shipping_address: "123 Creek St.",
    purchase_date: "2017-05-12",
    delivered: 1,
    consumer_id: 1
  },
  {
    id: "supersecret12345",
    shipping_address: "223 River Rd.",
    purchase_date: "2018-07-04",
    delivered: 1,
    consumer_id: 20
  },
  {
    id: "supersecret123456",
    shipping_address: "323 Main St.",
    purchase_date: "2019-08-03",
    delivered: 0,
    consumer_id: 20
  }
];

export default connect(
  mapStateToProps,
  {}
)(CustomerDashboard);
