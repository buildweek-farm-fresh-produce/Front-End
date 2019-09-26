import React from "react";
import "../../App.scss";
import { connect } from "react-redux";

const Order = props => {
  // console.log("Orders", props.orders);
  let returnEmpty = false;
  if (props.orders.length === 0) {
    returnEmpty = true;
  }
  // console.log(returnEmpty);
  return (
    <div className="orderCard">
      {returnEmpty && <h3>No Previous Orders</h3>}
      {props.orders.map(item => {
        return (
          <div className="orderPrev">
            <a href="#" className="list">
              {/* {`/dashboard/${item.id}`} */}
              <span>{item.purchase_date}</span>
              <span>{item.delivered}</span>
              <span>{item.consumer_id}</span>
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
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Order);
