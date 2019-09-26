import React, { useState, useEffect } from "react";
import { axiosWithAuth } from ".././../utils/axiosWithAuth";
import { Link } from "react-router-dom";

export const ShopList = () => {
  const [shopState, setShopState] = useState([]);
  const categoriesApi =
    "https://farm-fresh-bw.herokuapp.com/api/consumers/shop/categories";
  useEffect(() => {
    const getShopList = () => {
      axiosWithAuth()
        .get(categoriesApi)
        .then(response => {
          // console.log(response)
          setShopState(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getShopList();
  }, []);
  return (
    <div>
      <h2>Shop List</h2>
      <div>
        {shopState.map(items => (
          <ShopDetails key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};
function ShopDetails({ items }) {
  const { id, name } = items;
  return (
    <div>
      <Link to={`/shop/${id}`}>
        <h2>Name: {name}</h2>
      </Link>
    </div>
  );
}
