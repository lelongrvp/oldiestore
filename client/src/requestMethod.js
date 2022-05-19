import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODMxZmIwZDIxNTcwMjMxNzY2MDdjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjk4NDU5MCwiZXhwIjoxNjUzMjQzNzkwfQ.aDPr1DQaLXqX2JWQKCNzUKqEf929U0k-IeMv33kwEWk"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
});