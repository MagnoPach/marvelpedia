import styled from "styled-components";

interface PortraitDataProps {
  src: string;
}

export const Container = styled.div`
  padding: 16px;
  border-radius: 5px;
  background-color: #f0f0e4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Portrait = styled.div`
  width: 100%;
  aspect-ratio: 270 / 200;
  background: url(${(props: PortraitDataProps) => props.src}) top center /
    contain no-repeat;
`;

export const Name = styled.h1`
  margin-top: 12px;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2f0416;
`;

export const Button = styled.button`
  width: 100%;
  padding: 13px 0;
  margin-top: 20px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  background-color: #ec1d24;
  color: #f0f0e4;
  transition: 0.15s;

  :hover {
    background-color: #9a1032;
  }
`;
