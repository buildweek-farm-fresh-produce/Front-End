import React from "react";
import "../../App.scss";
import { connect } from "react-redux";

const Order = props => {
  console.log("Orders", props.orders);
  return (
    <div className="orderCard">
      {props.orders.map(item => {
        return (
          <div className="orderPrev">
            <a href={`/dashboard/${item.id}`} className="list">
              <p>{item.purchase_date}</p>
              <p>{item.delivered}</p>
              <p>{item.consumer_id}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    authLoading: state.authLoading,
    farmer: state.farmer
  };
};

export default connect(
  mapStateToProps,
  {}
)(Order);
