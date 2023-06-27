import styled, { keyframes } from "styled-components";

const loadAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 60px;

  .loader {
    border: 16px solid #ec1d24;
    border-radius: 50%;
    border-top: 16px solid black;
    border-bottom: 16px solid black;
    margin: 0 auto;
    width: 120px;
    height: 120px;
    -webkit-animation: ${loadAnimation} 2s linear infinite;
    animation: ${loadAnimation} 2s linear infinite;
  }
`;
