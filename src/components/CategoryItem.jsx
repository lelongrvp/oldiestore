import styled from "styled-components";
import React from "react";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  margin: 10px;
  height: 25vh;
  position: relative;
  ${mobile({ height: "15vh" })}
`;

const Title = styled.h1`
  font-weight: 600;
  margin-right: 650px;
  ${mobile({ fontSize: "20px" })}
`;

const Image = styled.img`
  width: 100%;
  height: 20vh;
  object-fit: cover;
  border-radius: 5px !important;
  ${mobile({
    width: "50%",
    height: "80%",
    marginTop: "10px",
    objectFit: "cover",
  })}
`;

const Info = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  ${mobile({ marginTop: "20px" })}
`;

const Button = styled.button`
  width: fit-content;
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  padding: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 800;
  font-size: large;
  ${mobile({ fontSize: "10px", padding: "15px" })}
`;

/**
 * CategoryItem is a function that takes an item as a parameter and returns a Container component that
 * contains an Image component and an Info component.
 * @returns A function that returns a component.
 */
const CategoryItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => navigate("/products")}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
