import styled from "styled-components"
import { mobile } from "../responsive";

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
    width: 50%;
    height: 330px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    ${mobile({width:"80%", height:"520px"})}
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border: 2px solid lightgray;
`;

const Agreement = styled.span`
    font-size: 14px;
    padding-top: 20px;
    margin: 20px 0px;
    ${mobile({fontSize:"13px"})}
`;

const Important = styled.span`
    cursor: pointer;  
`;

const Button = styled.button`
    display: flex;
    width: 30%;
    border: none;
    border-radius: 10px!important;
    margin-top: 30px;
    justify-content: center;
    margin-bottom: 10px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    ${mobile({width:"100px",marginTop:"10px"})}
`;

const Register = () => {
  return (
      <Container>
          <Wrapper>
              <Title>Create Your Account</Title>
              <Form>
                  <Input placeholder="First name"/>
                  <Input placeholder="Last name"/>
                  <Input placeholder="Username"/>
                  <Input placeholder="E-mail"/>
                  <Input placeholder="Password"/>
                  <Input placeholder="Confirm password"/>
              </Form>
              <Agreement>
                  By creating an account, I consent to the processing of my
                  personal data in accordance with the <Important><b>PRIVACY POLICY</b></Important>
              </Agreement>
              <Button>CREATE</Button>
          </Wrapper>
      </Container>
  )
}

export default Register