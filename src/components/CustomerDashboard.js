import React, { useEffect } from "react";
import "../App.scss";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Order from "./Order";

function CustomerDashboard() {
  useEffect(props => {
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
      <h2>Welcome to the Customer Dashboard!</h2>
      <div className="orders">
        <h3>Current Orders</h3>
        <Order
          orders={orders.filter(item => {
            if (item.consumer_id === 1) {
              return item;
            }
          })}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    authLoading: state.authLoading,
    farmer: state.farmer
  };
};

const orders = [
  {
    id: "supersecret1",
    shipping_address: "123 Main St.",
    purchase_date: "2019-08-06",
    delivered: 0,
    consumer_id: 1
  },
  {
    id: "supersecret12",
    shipping_address: "223 Beach St.",
    purchase_date: "2019-03-04",
    delivered: 1,
    consumer_id: 1
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
    consumer_id: 2
  },
  {
    id: "supersecret123456",
    shipping_address: "323 Main St.",
    purchase_date: "2019-08-03",
    delivered: 0,
    consumer_id: 3
  }
];

export default connect(
  mapStateToProps,
  {}
)(CustomerDashboard);
