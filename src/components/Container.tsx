import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  children?: React.ReactNode;
};

const StyledContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 32px;
  color: black;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  margin: 180px 0 20px;
  max-width: 60%;
  height: fit-content;
  padding: 40px 30px 30px;

  @media (max-width: 1200px) {
    padding: 30px 20px 20px;
    max-width: 80%;
  }
  @media (max-width: 800px) {
    padding: 20px 10px 10px;
    max-width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: min-content;
`;

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
