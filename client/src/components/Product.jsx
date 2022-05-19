import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from '../responsive';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b6e7f8;
    border-radius: 5px!important;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Image = styled.img`
    width: 500px;
    height: 250px;
    object-fit: contain;
    z-index: 2;
    ${mobile({width:"80%", height:"30vh", objectFit:"contain"})}
`;

const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #555555;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #2b2b2b;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product