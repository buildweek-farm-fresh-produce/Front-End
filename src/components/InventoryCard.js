import React from "react";
import { Link } from "react-router-dom";

function InventoryCard(props) {



    return (
    
    <div className="farmer-card-wrapper">
     <h1>INVENTORY</h1> 
     {props.items.map(item => (
    <div className="cards-div key={item.id}">
    <div className="farmer-card">
    <Link to={`item-list/${item.id}`}>
    <img className="produce-img" src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'" alt={item.name}/>
    <p>{item.name}</p>
    </Link>
    <p>${item.price}</p>
    <p>Quantity: {item.quantity}</p>
    </div>
    </div>
    ))}
    </div>
    
    )
    
}
  export default InventoryCard