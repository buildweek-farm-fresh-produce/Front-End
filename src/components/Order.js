import React from "react";
import "../App.scss";
import { connect } from "react-redux";

const Order = props => {
  return (
    <div className="orderCard">
      <p>Hi, I'm an order</p>
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
