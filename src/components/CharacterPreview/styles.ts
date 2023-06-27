import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  min-height: 400px;
  padding: 16px;
  border-radius: 5px;
  background-color: #f0f0e4;
`;

export const Portrait = styled.div`
  width: 100%;
  aspect-ratio: 270 / 200;

  && {
    background-size: 100%;
  }
`;

export const Name = styled.div`
  height: 50px;
`;

export const Highlight = styled.div`
  height: 80px;
`;

export const Button = styled.div`
  height: 40px;
`;
