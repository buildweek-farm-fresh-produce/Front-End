import React, { useState } from "react";
import data from "./ShopData";
import ShopCard from "./ShopCard";

export const ShopList = () => {
  const [shopState, setShopState] = useState(data);

  return (
    <div>
      <h2>Shop List</h2>
      <div>
        {shopState.map(items => {
          return (
            <ShopCard key={items.id} name={items.name} image={items.image} />
          );
        })}
      </div>
    </div>
  );
};
