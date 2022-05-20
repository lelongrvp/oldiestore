import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethod";
import { mobile } from "../responsive";
import {useDispatch} from "react-redux"

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 10px;
    margin-left: 50px;
    display: flex;
    ${mobile({padding:"10px",marginLeft:"0", flexDirection:"column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: contain;
    ${mobile({width:"90%", height:"20vh"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    margin-top: 70px;
    ${mobile({padding:"0px 0px", marginTop:"0px"})}
`;

const Title = styled.h1`
    color: black;
    font-size: 80px;
    font-weight: 500;
    ${mobile({fontSize:"30px"})}
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-size: larger;
    ${mobile({width:"90%", fontSize:"smaller"})}
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

const Filter = styled.div`
`;

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
    border-radius: 5px!important;
    margin: 5px 5px;
    text-align: center;
    cursor: pointer;
    transition: 0.5s all ease;
    &:hover{
        background-color: lightgray;
    }
    ${mobile({padding:"0", fontSize:"smaller"})}
`;

const FilterMethod = styled.select`
    margin-left: 10px;
    padding: 10px;
    cursor: pointer;
    ${mobile({margin:"20px 0px"})}
`;

const FilterMethodOption = styled.option`
`;

const AddContainer = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
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
    border-radius: 5px!important;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    margin-right: 200px;
    ${mobile({marginLeft:"30px"})}
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product,setProduct] = useState({});
    const [version, setVersion] = useState("");
    const [method, setMethod] = useState("");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data);
            } catch{}
        };
        getProduct()
    }, [id]);
    
    const handleQuantity = (type) =>{
        if(type === "dec"){
          quantity > 1 && setQuantity(quantity-1)
        } else {
          setQuantity(quantity+1)
        }
      }

    const handleClick = () => {
       dispatch(
        addProduct({...product, quantity, version, method})
       )
    };

  return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <ImgContainer>
              <Image src={product.img}/>
              </ImgContainer>
              <InfoContainer>
                  <Title>{product.title}</Title>
                  <Desc>{product.desc}</Desc>
                  <Price>${product.price}</Price>
                  <FilterContainer>
                      <Filter>
                        <FilterTitle>Version</FilterTitle>
                        {product.version?.map((v) => (
                        <FilterVersion version={v} key={v} onClick={(e) => setVersion(v)} />
                        ))}
                      </Filter>
                      <Filter>
                        <FilterTitle>Receive Method</FilterTitle>
                        <FilterMethod onChange={(e) => setMethod(e.target.value)}>
                            {product.method?.map((m) => (
                                <FilterMethodOption key={m}>{m}</FilterMethodOption>
                            ))}
                        </FilterMethod>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                      <AmountContainer>
                          <Remove onClick={()=>handleQuantity("dec")}/>
                          <Amount>{quantity}</Amount>
                          <Add onClick={()=>handleQuantity("inc")}/>
                      </AmountContainer>
                      <Button onClick={handleClick}>ADD TO CART</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter/>
          <Footer/>
      </Container>
  )
}

export default Product