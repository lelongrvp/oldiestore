import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({display:"grid", 
            flexDirection:"column", 
            marginLeft:"40px", 
            width:"30%", 
            alignItems:"center"})}
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const {filters, setFilters} = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  console.log(filters)

  return (
      <Container>
          <Navbar/>
          <Announcement/>
            <Title>Video Games</Title>
          <FilterContainer>
              <Filter><FilterText>Filter:</FilterText></Filter>
              <Select name="platform" onChange={handleFilters}>
                  <Option disabled>Platform</Option>
                  <Option>PC (via Steam)</Option>
                  <Option>PlayStation 5</Option>
                  <Option>PlayStation 4</Option>
                  <Option>Xbox One</Option>
                  <Option>Xbox Series X</Option>
                  <Option>Nintendo Switch</Option>
              </Select>
              <Select name="genre" onChange={handleFilters}>
                  <Option disabled>Genre</Option>
                  <Option>Action</Option>
                  <Option>Action-Adventure</Option>
                  <Option>Casual</Option>
                  <Option>Role-Playing</Option>
                  <Option>Shooter</Option>
                  <Option>Sport</Option>
              </Select>
              <Filter><FilterText>Sort:</FilterText></Filter>
              <Select>
                  <Option>Recent</Option>
                  <Option>Price (low to high)</Option>
                  <Option>Price (high to low)</Option>
              </Select>
          </FilterContainer>
          <Products/>
          <Newsletter/>
          <Footer/>
      </Container>
  )
}

export default ProductList;