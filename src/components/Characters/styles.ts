import styled from "styled-components";

export const Container = styled.div`
  min-height: 300px;
  padding: 0 20px 30px;
  margin-top: 30px;

  * {
    -moz-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in;
    -webkit-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-auto-rows: min-content;
  justify-content: center;
  gap: 20px;
  transition: 0.2s ease;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border-radius: 4px;
  color: #fff;
  font-weight: 700;
  margin: 40px auto 0;
  transition: 0.2s;

  :hover {
    opacity: 0.85;
  }
`;

export const Disclaimer = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  color: #2f0416;
  margin-bottom: 8px;
  text-align: center;
`;
