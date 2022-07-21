import React from 'react';
import styled from 'styled-components';

type CardsContainerProps = {
  children?: React.ReactNode;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 32px;

  max-width: 60%;
  @media (max-width: 1200px) {
    max-width: 80%;
  }
  @media (max-width: 800px) {
    max-width: 100%;
  }
  min-width: min-content;
  margin-bottom: 20px;
`;

const CardsContainer = ({ children }: CardsContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default CardsContainer;
