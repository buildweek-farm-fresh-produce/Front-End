import React from "react";

const Farm = props => {
  return (
    <div className="farm" key={props.item.id}>
      <h3>{props.item.name}</h3>
      <p>Address: {props.item.address}</p>
      <p>Founded: {props.item.year_founded}</p>
      <p>Bio: {props.item.bio}</p>
    </div>
  );
};

export default Farm;
