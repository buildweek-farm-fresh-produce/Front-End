import React from "react";
import { addToCart } from "../../actions";
import { connect } from "react-redux";

const Farm = props => {
  return (
    <div className="farm">
      <h3>{props.item.produce_name}</h3>
      <p>Price: {props.item.unit_price}</p>
      <p>{props.item.quantity} in stock</p>
      <p>Sold By: {props.item.seller}</p>
      <button
        onClick={() => props.addToCart(props.item)}
        className="button addButton"
      >
        Add to cart
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    farmer: state.farmer
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(Farm);
