import React from "react";
import "../../App.scss";
import { connect } from "react-redux";

const Order = props => {
  // console.log("Cart", props.orders);
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
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <p>{item.price}</p>
              <p>{item.category_id}</p>
              <p>{item.farm_id}</p>
              <p>{item.farm_name}</p>
              <div className="button">Edit</div>
              <div className="button">Delete</div>
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
