import { useState } from "react";
import styled from "styled-components"
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ), 
        url("https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") center;
    background-size: 1920px 1080px;
    background-repeat: no-repeat;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    height: 27%;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    ${mobile({width:"80%", height:"45%"})}
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    border: 2px solid lightgray;
`;

const Button = styled.button`
    display: flex;
    width: 30%;
    border: none;
    border-radius: 10px!important;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    justify-content: center;
    cursor: pointer;
    ${mobile({width:"100px"})}
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;  
`;

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);

const handleClick = (e)=>{
    e.preventDefault();
    login(dispatch, {username, password});
}
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN TO YOUR ACCOUNT</Title>
            <Form>
                <Input placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
            </Form>
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Something went wrong...</Error>}
            <Link>Forgot the password?</Link>
            <Link>Create new account? Click herre</Link>
        </Wrapper>
    </Container>
  )
}

export default Login