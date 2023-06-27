import { X } from "react-feather";
import styled from "styled-components";

interface ContainerProps {
  isPinned: boolean;
}

export const Container = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 20px;
  justify-content: center;
  background-color: ${(props: ContainerProps) => props.isPinned && "#000 "};
  transition: 0.2s;

  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 20px;
    flex-direction: row;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 410px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
  text-align: initial;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #af4660;
  border-radius: 5px;
  margin-top: 5px;
  background-color: #eb7676;

  @media (min-width: 768px) {
    flex-shrink: 0;
    padding: 10px 14px;
  }

  input {
    flex: 1;
    font-size: 14px;
    background-color: transparent;
    color: #000;

    @media (min-width: 768px) {
      font-size: 16px;
    }

    ::placeholder {
      color: #000;
    }
  }
`;

export const FiltersButton = styled.button`
  position: relative;
  transform: translateY(-1px);
  display: flex;
  align-items: center;
  align-self: flex-end;
  min-width: 90px;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  text-align: initial;
  background-color: ${(props: ContainerProps) =>
    props.isPinned ? "#d9d8d8" : "#000"};
  color: ${(props: ContainerProps) => (props.isPinned ? "#000" : "#fff")};

  @media (min-width: 768px) {
    min-width: 250px;
    padding: 10px 14px;
    font-size: 16px;
  }

  p {
    flex: 1;
  }

  :hover {
    opacity: 0.85;
  }
`;

export const EraseButton = styled(X)`
  cursor: pointer;
`;
