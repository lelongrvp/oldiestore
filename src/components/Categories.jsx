import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 10px;
  margin-left: 10px;
  ${mobile({ padding: "0px" })}
`;

/**
 * Categories is a function that returns a Container component that contains a list of CategoryItem
 * components, each of which is passed a category item from the categories array.
 * @returns A Container component with a list of CategoryItem components.
 */
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
