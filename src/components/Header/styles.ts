import styled from "styled-components";
import backgroundImage from "../../assets/images/background.png";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  padding-top: 46px;
  margin: 0 auto;
  background: url(${backgroundImage}) bottom center / contain no-repeat;
  @media (min-width: 800px) {
    width: 100%;
    max-width: 1260px;
    height: 500px;
    padding-top: 46px;
    margin: 0 auto;
    background: url(${backgroundImage}) top center / cover no-repeat;
  }
`;
