import styled from "styled-components";
import React from 'react';
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    margin: 40px;
    height: 25vh;
    position: relative;
    ${mobile({height:"15vh"})}
`;

const Title = styled.h1`
    font-weight: 600;
    margin-left: 20px;
    ${mobile({fontSize:"20px"})}
`

const Image = styled.img`
    width: 100%;
    height: 20vh;
    object-fit: cover;
    border-radius: 5px!important;
    ${mobile({width:"50%", height:"80%", marginTop:"10px", objectFit:"cover"})}
`;

const Info = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    ${mobile({marginTop:"20px"})}
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
    ${mobile({fontSize:"10px", padding:"15px"})}
`;

const CategoryItem = ({item}) => {
  return (
      <Container>
          <Link to={`/products/${item.cat}`}>
          <Image src={item.img}/>
          <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
          </Info>
          </Link>
      </Container>
  )
}

export default CategoryItem