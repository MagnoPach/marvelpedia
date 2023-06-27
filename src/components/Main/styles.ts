import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  min-height: 1000px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 80px;
  }
`;
