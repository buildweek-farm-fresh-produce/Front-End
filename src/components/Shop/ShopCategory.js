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
    <CategoryItems>
      <h2>Shop Category Items</h2>
      <ShopState2>
        {shopState.map(items => (
          <ShopCard key={items.id} items={items} />
        ))}
      </ShopState2>
    </CategoryItems>
  );
}

// Styled Components
const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShopState2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  width: 900px;
  justify-content: space-around;
`;
