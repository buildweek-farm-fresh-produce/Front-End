import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import "../../../src/App.scss";
import { addToCart } from "../../actions";
import { connect } from "react-redux";

function ShopCard(props) {
  const addToCartAC = () => {
    props.addToCart(props.items);
    console.log(props);
    props.history.push("/dashboard");
  };

  return (
    <ShopCardDiv>
      <h2>{props.items.name}</h2>
      <div>
        <p>Quantity: {props.items.quantity}</p>
        <p>Price: {props.items.price}</p>
        <p>Category-No: {props.items.category_id}</p>
        <p>Farm-No: {props.items.farm_id}</p>
        <Link to="/inventory" className="link">
          <h5>Farm Name: {props.items.farm_name}</h5>
        </Link>
        <SubmitButton onClick={() => addToCartAC()}>Add to cart</SubmitButton>
      </div>
    </ShopCardDiv>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(withRouter(ShopCard));

//Styled Components
const ShopCardDiv = styled.div`
  display: flex;
  flex-direction: row-gap;
  flex-wrap: wrap;
  width: 30%;
  margin-left: 20px;
  margin-bottom: 10px;
  justify-content: center;
  margin-right: 20px;
  border-radius: 25px;
  background-color: lightgray;
  h2 {
    width: 48%;
    flex-wrap: word-wrap;
    margin-right: 54px;
  }
  p {
    margin-left: 70px;
    width: 48%;
    flex-wrap: word-wrap;
  }
  .link:hover {
    background-color: #fe0760;
    color: tomato;
    transform: translate(0px, -1px);
    transition-duration: 0.2s;
  }
`;
const SubmitButton = styled.button`
  padding: 10px;
  height: 55px;
  width: 130px;
  background: #ff5757;
  color: white;
  border-radius: 25px;
  line-height: 20px;
  font-size: 1.2rem;
  box-shadow: 2px 2px 3px #000;
  font-family: "Playfair Display", serif;
  margin-left: 0px;
  margin-bottom: 10px;
`;
