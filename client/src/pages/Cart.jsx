import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display:"none"})}
`;

const TopText= styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    height: 100px;
    object-fit: contain;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductVersion = styled.span``;

const ProductMethod = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`;

const Hr = styled.hr`
    background-color: black;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 35vh;
    line-height: 25pt;
    
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.type === "total" && "500"};
    font-size: ${(props)=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
  return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping cart(2)</TopText>
                        <TopText>Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1639025793"/>
                                <Details>
                                    <ProductName><b>Name: </b>HALO Infinite</ProductName>
                                    <ProductId><b>ID: </b>912381979831</ProductId>
                                    <ProductVersion><b>Version: </b>Standard Edition</ProductVersion>
                                    <ProductMethod><b>Method: </b>Code</ProductMethod>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$59.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1646996408"/>
                                <Details>
                                    <ProductName><b>Name: </b>The Witcher 3: Wild Hunt</ProductName>
                                    <ProductId><b>ID: </b>912381975131</ProductId>
                                    <ProductVersion><b>Version: </b>Game of the Year Edition</ProductVersion>
                                    <ProductMethod><b>Method: </b>Code</ProductMethod>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$49.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-front-with-dualsense?$Background_Large$"/>
                                <Details>
                                    <ProductName><b>Name: </b>PlayStation 5</ProductName>
                                    <ProductId><b>ID: </b>912381985731</ProductId>
                                    <ProductVersion><b>Version: </b>Digital Edition</ProductVersion>
                                    <ProductMethod><b>Method: </b>Delivery</ProductMethod>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$399.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_768/ncom/en_US/switch/site-design-update/photo01?v=2022041922"/>
                                <Details>
                                    <ProductName><b>Name: </b>Nintendo Switch</ProductName>
                                    <ProductId><b>ID: </b>912381213131</ProductId>
                                    <ProductVersion><b>Version: </b>OLED</ProductVersion>
                                    <ProductMethod><b>Method: </b>Delivery</ProductMethod>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$349.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$859.96</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$99.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$29.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>$929.96</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart