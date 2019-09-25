import React from "react";


export default function ShopCard (props){
    return(
        <div>
            <img src={props.image} alt='produce'/>
            <h2>Name: {props.name}</h2>
        </div>
    )
}