import React, { useState, useEffect } from "react";
import { axiosWithAuth } from ".././../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
      <Header1Style>
        <h2>Shop List Category</h2>
      </Header1Style>

      <ShopState className="test">
        {shopState.map(items => (
          <ShopDetails key={items.id} items={items} />
        ))}
      </ShopState>
    </div>
  );
};
function ShopDetails({ items }) {
  const { id, name } = items;
  return (
    <div className="Header2Style">
      <Link to={`/shop/${id}`}>
        <Header2Style>
          <h3>{name}</h3>
        </Header2Style>
      </Link>
    </div>
  );
}

const ShopState = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 600px;
  margin-left: 378px;
`;

const Header2Style = styled.h2`
  margin: 10px auto;
  border: 10px solid tomato;
  width: 250px;
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  font-size: 1.7rem;
  h3 {
    margin-left: 70px;
    font-size: 1.7rem;
    
  }
`;

const Header1Style = styled.h2`
  margin: 10px auto;
  border: 10px solid tomato;
  width: 600px;
  background: #a4a37a;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  h2 {
    margin-left: 180px;
    font-size: 1.7rem;
    color: white;
  }
`;
