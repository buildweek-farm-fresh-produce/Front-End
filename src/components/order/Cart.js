import React from "react";
import "../../App.scss";
import { connect } from "react-redux";

const Order = props => {
  console.log("Cart", props.orders);
  let returnEmpty = false;
  if (props.cart.length === 0) {
    returnEmpty = true;
  }
  return (
    <div className="orderCard">
      {returnEmpty && <h3>Your Cart Is Empty</h3>}
      <div className="orderPrev">
        {props.cart.map(item => {
          return (
            <div className="itemList" key={item.id}>
              <h3>{item.produce_name}</h3>
              <p>{item.quantity} in stock</p>
              <p>Price: {item.unit_price}</p>
              <p>Sold By: {item.seller}</p>
              <div className="buttonBar">
                <div className="button cartButton">Edit</div>
                <div className="button cartButton">Delete</div>
              </div>
            </div>
          );
        })}
      </div>

      {returnEmpty && <div className="button cartButton">Submit Order</div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    authLoading: state.authLoading,
    user: state.user,
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  {}
)(Order);
