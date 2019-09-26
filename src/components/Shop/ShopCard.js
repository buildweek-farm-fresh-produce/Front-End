import React from "react";

export default function ShopCard(props) {
  console.log(props);
  return (
    <div>
      <h2>Name: {props.items.name}</h2>
      <p>Quantity: {props.items.quantity}</p>
      <p>Price: {props.items.price}</p>
      <p>Category-No: {props.items.category_id}</p>
      <p>Farm-No: {props.items.farm_id}</p>
      <p>Farm Name: {props.items.farm_name}</p>
    </div>
  );
}
