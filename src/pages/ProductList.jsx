import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({
    display: "grid",
    flexDirection: "column",
    marginLeft: "40px",
    width: "30%",
    alignItems: "center",
  })}
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
  return (
    <Container>
      <Navbar />
      <Announcement />
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
        </Filter>
        <Select name="platform">
          <Option disabled>Platform</Option>
          <Option>PC</Option>
          <Option>PlayStation 5</Option>
          <Option>PlayStation 4</Option>
          <Option>Xbox One</Option>
          <Option>Xbox Series X</Option>
          <Option>Nintendo Switch</Option>
        </Select>
        <Select name="genre">
          <Option disabled>Genre</Option>
          <Option>Action</Option>
          <Option>Action-Adventure</Option>
          <Option>Casual</Option>
          <Option>Role-Playing</Option>
          <Option>Shooter</Option>
          <Option>Sport</Option>
        </Select>
        <Filter>
          <FilterText>Sort:</FilterText>
        </Filter>
        <Select>
          <Option value="recent">Recent</Option>
          <Option value="asc">Price (low to high)</Option>
          <Option value="desc">Price (high to low)</Option>
        </Select>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
