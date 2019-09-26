import React from "react";
import styled from "styled-components";

export default function ShopCard(props) {
  return (
    <ShopCardDiv>
      <h2>{props.items.name}</h2>
      <div>
        <p>Quantity: {props.items.quantity}</p>
        <p>Price: {props.items.price}</p>
        <p>Category-No: {props.items.category_id}</p>
        <p>Farm-No: {props.items.farm_id}</p>
        <p>Farm Name: {props.items.farm_name}</p>
        <SubmitButton>Add to cart</SubmitButton>
      </div>
    </ShopCardDiv>
  );
}

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
  border: 3px solid #656f7c;
  box-shadow: 2px 2px 3px #000;
  font-family: "Playfair Display", serif;
  margin-left: 0px;
  margin-bottom: 10px;
`;
