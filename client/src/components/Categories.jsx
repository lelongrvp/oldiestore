import styled from "styled-components";
import { categories } from '../data';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 10px;
    margin-left: 10px;
    ${mobile({padding:"0px"})}
`;

const Categories = () => {
    return <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>;
};

export default Categories