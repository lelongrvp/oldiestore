import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Payment,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const PaymentMethod = styled.img`
  width: 50%;
`;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Left>
        <Logo>.POOCHSWADGE.</Logo>
        <Desc>One of the most passionate people in the entire world.</Desc>
        <SocialContainer>
          <SocialIcon
            color="3B5999"
            onClick={() => {
              window.open("https://www.facebook.com/poochswadge", "_blank");
            }}
          >
            <Facebook />
          </SocialIcon>
          <SocialIcon
            color="55ACEE"
            onClick={() => {
              window.open("https://www.twitter.com/poochswadge", "_blank");
            }}
          >
            <Twitter />
          </SocialIcon>
          <SocialIcon
            color="E4405F"
            onClick={() => {
              window.open("https://www.instagram.com/leducllong", "_blank");
            }}
          >
            <Instagram />
          </SocialIcon>
          <SocialIcon
            color="171515"
            onClick={() => {
              window.open("https://www.github.com/lelongrvp", "_blank");
            }}
          >
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem onClick={() => navigate("/")}>Home</ListItem>
          <ListItem onClick={() => navigate("/cart")}>Cart</ListItem>
          <ListItem onClick={() => navigate("/products")}>Video Games</ListItem>
          <ListItem onClick={() => navigate("/products")}>Consoles</ListItem>
          <ListItem onClick={() => navigate("/products")}>Merchandise</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Term & Condition</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 123 ABC Street, XYZ, Wakanda
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +123 456 789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> lelongrvp7@gmail.com
        </ContactItem>
        <Payment style={{ marginRight: "10px" }} />
        <PaymentMethod />
      </Right>
    </Container>
  );
};

export default Footer;
