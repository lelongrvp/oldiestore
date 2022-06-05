import React, { useState } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Card = styled.div`
  background: #16181a;
  border-radius: 14px;
  max-width: 300px;
  display: block;
  margin: auto;
  padding: 60px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 2px 10px 40px black;
  z-index: 99;
`;
const Proceed = styled.button`
  position: absolute;
  transform: translate(300px, 10px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1abc9c;
  border: none;
  color: white;
  transition: box-shadow 0.2s, transform 0.4s;
  cursor: pointer;
  &:hover {
    background: #1c7e6a;
    transition: all 1s ease;
  }
`;
const SendIcon = styled.svg``;
const LogoCard = styled.img`
  max-width: 50px;
  margin-bottom: 15px;
  margin-top: -19px;
`;
const CardNumber = styled.label`
  display: block;
  font-size: 15px;
  margin-bottom: 8px;
  color: #fff;
`;
const InputCardNumber = styled.input`
  font-family: "Work Sans", sans-serif;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: #dbdce0;
  transition: border-bottom 0.4s;
  &:focus {
    border-bottom: 1px solid #1abc9c;
    outline: none;
  }
`;
const Name = styled.label`
  display: flex;
  font-size: 15px;
  max-width: 200px;
  float: left;
  margin-bottom: 15px;
  color: #dbdce0;
`;
const InputName = styled.input`
  font-family: "Work Sans", sans-serif;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: #dbdce0;
  transition: border-bottom 0.4s;
  &:focus {
    border-bottom: 1px solid #1abc9c;
    outline: none;
  }
`;
const ToLeft = styled.label`
  display: flex;
  font-size: 15px;
  max-width: 200px;
  float: left;
  margin-bottom: 15px;
  color: #dbdce0;
`;
const InputToLeftCCV = styled.input`
  font-family: "Work Sans", sans-serif;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  color: #dbdce0;
  transition: border-bottom 0.4s;
  &:focus {
    border-bottom: 1px solid #1abc9c;
    outline: none;
  }
`;
const Receipt = styled.div`
  background: #dbdce0;
  border-radius: 4px;
  padding: 5%;
  padding-top: 200px;
  max-width: 600px;
  display: block;
  margin: auto;
  margin-top: -180px;
  z-index: -999;
  position: relative;
`;
const Col = styled.div`
  width: 50%;
  float: left;
`;
const Cost = styled.h2`
  color: #3a7bd5;
`;
const Seller = styled.h2`
  color: #3a7bd5;
`;
const BoughtItems = styled.h3`
  padding: 2px;
`;
const BoughtItemsPrice = styled.p``;
const Comprobe = styled.p`
  text-align: center;
`;

export default function Order() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };

  const handleChange2 = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue2(result);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Card>
          <Proceed
            onClick={() => {
              window.location.href = "/review";
            }}
          >
            <SendIcon width={24} height={24} viewBox="0 0 24 24">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </SendIcon>
          </Proceed>
          <LogoCard
            src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png"
            alt="abcxyz"
          />
          <CardNumber>
            Card number:
            <InputCardNumber
              id="user"
              value={value2}
              onChange={handleChange2}
              placeholder="1234 5678 9101 1121"
              maxLength={12}
            />
          </CardNumber>
          <Name>
            Name: <InputName placeholder="Le Duc Long" />
          </Name>
          <ToLeft>
            CCV:
            <InputToLeftCCV
              value={value}
              onChange={handleChange}
              placeholder={321}
              maxLength={3}
            />
          </ToLeft>
        </Card>
        <Receipt>
          <Col>
            <p>Cost:</p>
            <Cost>$49.99</Cost>
            <br />
            <p>Name:</p>
            <Seller>CD Projekt RED</Seller>
          </Col>
          <Col>
            <p>Bought Items:</p>
            <BoughtItems>The Witcher 3: Wild Hunt</BoughtItems>
            <BoughtItemsPrice>$19.99 (50% discount)</BoughtItemsPrice>
            <br />
            <BoughtItems>FIFA 22</BoughtItems>
            <BoughtItemsPrice>$29.99 (50% discount)</BoughtItemsPrice>
            <br />
          </Col>
          <Comprobe>This information will be sended to your email</Comprobe>
        </Receipt>
      </Wrapper>
      <Footer />
    </Container>
  );
}
