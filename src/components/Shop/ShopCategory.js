import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import ShopCard from "./ShopCard";
import styled from "styled-components";

export default function ShopCategory(props) {
  const [shopState, setShopState] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;
    axiosWithAuth()
      .get(
        `https://farm-fresh-bw.herokuapp.com/api/consumers/shop/category/${id}`
      )
      .then(response => {
        setShopState(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);
  return (
    <div>
      <h2>Shop Category Items</h2>
      <ShopState2>
        {shopState.map(items => (
          <ShopCard key={items.id} items={items} />
        ))}
      </ShopState2>
    </div>
  );
}

const ShopState2 = styled.div`
  border: 2px solid red;
`;
