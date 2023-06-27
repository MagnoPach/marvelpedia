import { Play } from "react-feather";
import styled from "styled-components";

interface PortraitDataProps {
  src: string;
}

interface ButtonDataProps {
  secondary: boolean | null;
}

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(20px);
`;

export const ContainerWrapper = styled.div`
  @media (min-width: 768px) {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    #modal {
      -moz-transition: all 0.1s ease-in;
      -o-transition: all 0.1s ease-in;
      -webkit-transition: all 0.1s ease-in;
      transition: all 0.1s ease-in;
    }
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #f0f0e4;
  overflow: scroll;

  @media (min-width: 768px) {
    position: initial;
    max-width: 720px;
    height: fit-content;
    padding: 30px 50px;
    border-radius: 2px;
    overflow: initial;
    box-shadow: 0 0 30px #2f04164f;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseButtonWrapper = styled.button`
  background-color: transparent;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  label {
    display: none;

    @media (min-width: 768px) {
      cursor: pointer;
      display: initial;
      font-weight: 700;
      font-size: 15px;
      text-transform: uppercase;
      color: #000;
    }
  }
`;

export const Columns = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 270px 1fr;
    gap: 30px;
    margin-top: 15px;
  }
`;

export const Portrait = styled.div`
  width: 100%;
  aspect-ratio: 270 / 200;
  background: url(${(props: PortraitDataProps) => props.src}) center left /
    contain no-repeat;

  @media (min-width: 768px) {
  }
`;

export const Name = styled.h1`
  margin-top: 12px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #2f0416;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  color: #2f0416;
  margin-bottom: 8px;
`;

export const Overflow = styled.div`
  overflow: auto;
  max-height: 107px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #2f0416;
  margin-bottom: 6px;
`;

export const Square = styled.span`
  display: block;
  width: 5px;
  aspect-ratio: 1;
  transform: rotate(45deg);
  background-color: #9a1032;
`;

export const Bio = styled.p`
  margin-top: 12px;
  margin-bottom: 16px;
  font-size: 15px;
  color: #2f0416;

  @media (min-width: 768px) {
    width: 100%;
    max-height: 360px;
    margin-top: 20px;
    margin-bottom: 0;
    overflow-y: auto;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 0;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: transparent;
  color: ${(props: ButtonDataProps) =>
    props.secondary ? "#888073" : "#9a1032"};
`;

export const LeftArrow = styled(Play)`
  cursor: pointer;
  transform: rotate(180deg);
`;

export const RightArrow = styled(Play)`
  cursor: pointer;
`;
