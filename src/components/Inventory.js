import React from "react";

function Inventory(props) {
  const item = props.items.find(
    unit => unit.id === Number(props.match.params.id)
  );

  return (
    <div className="item-container">
      <div className="item-title">
        <div>
          <img
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'"
            alt={item.name}
          />
        </div>

        <div>
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
        </div>
      </div>
    </div>
  );
}
export default Inventory;
