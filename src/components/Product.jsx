import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b6e7f8;
  border-radius: 5px !important;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 250px;
  object-fit: contain;
  z-index: 2;
  ${mobile({ width: "80%", height: "30vh", objectFit: "contain" })}
`;

const Icon = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  background-color: #555555;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #2b2b2b;
    transform: scale(1.1);
  }
  &:focus {
    background-color: red;
    transition-duration: 0.1s;
  }
`;

const Product = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon onClick={() => navigate("/cart")}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon onClick={() => navigate("/product")}>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
