import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px;
  margin-left: 50px;
  display: flex;
  ${mobile({ padding: "10px", marginLeft: "0", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: contain;
  ${mobile({ width: "90%", height: "20vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  margin-top: 70px;
  ${mobile({ padding: "0px 0px", marginTop: "0px" })}
`;

const Title = styled.h1`
  color: black;
  font-size: 80px;
  font-weight: 500;
  ${mobile({ fontSize: "30px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: larger;
  ${mobile({ width: "90%", fontSize: "smaller" })}
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 50px;
`;

const FilterContainer = styled.div`
  width: 60%;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Filter = styled.div``;

const FilterTitle = styled.span`
  font-size: 25px;
  font-weight: 300;
`;

const FilterVersion = styled.div`
  margin-top: 10px;
  padding: 10px;
  width: 150px;
  height: 30px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px !important;
  margin: 5px 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    background-color: lightgray;
  }
  &:focus {
    background-color: #444343;
  }
  ${mobile({ padding: "0", fontSize: "smaller" })}
`;

const FilterMethod = styled.select`
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;
  ${mobile({ margin: "20px 0px" })}
`;

const FilterMethodOption = styled.option``;

const AddContainer = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border-radius: 5px !important;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-right: 200px;
  &:hover {
    background-color: teal;
    color: white;
    transition: 0.5s all ease;
  }
  ${mobile({ marginLeft: "30px" })}
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1646996408" />
        </ImgContainer>
        <InfoContainer>
          <Title>The Witcher 3: Wild Hunt</Title>
          <Desc>
            As war rages on throughout the Northern Realms, you take on the
            greatest contract of your life — tracking down the Child of
            Prophecy, a living weapon that can alter the shape of the world.
          </Desc>
          <Price>$39.99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Version</FilterTitle>
              <FilterVersion>Standard Edition</FilterVersion>
              <FilterVersion>GOTY Edition</FilterVersion>
            </Filter>
            <Filter>
              <FilterTitle>Receive Method</FilterTitle>
              <FilterMethod>
                <FilterMethodOption>Gift</FilterMethodOption>
                <FilterMethodOption>Code</FilterMethodOption>
              </FilterMethod>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
