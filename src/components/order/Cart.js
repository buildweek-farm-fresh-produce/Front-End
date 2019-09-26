import React from "react";
import "../../App.scss";
import { connect } from "react-redux";
import { handleQuantity } from "../../actions";

const Order = props => {
  console.log("Cart", props.cart);
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
            <div className="itemList" key={item.product.id}>
              <h3>{item.product.produce_name}</h3>
              <p>{item.product.quantity} in stock</p>
              <p>Price: {item.product.unit_price}</p>
              <p>Sold By: {item.product.seller}</p>
              <p>
                Quantity to purchase:&nbsp;
                <input
                  type="text"
                  onChange={props.handleQuantity}
                  value={item.quantity}
                  size="2"
                  name={`${item.product.seller}${item.product.produce_name}`}
                />
              </p>
              <div className="buttonBar">
                <div className="button cartButton">Delete</div>
              </div>
            </div>
          );
        })}
      </div>

      {!returnEmpty && <div className="button cartButton">Submit Order</div>}
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
  { handleQuantity }
)(Order);
