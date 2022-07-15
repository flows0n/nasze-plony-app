import React from 'react';
import styled from 'styled-components';

type CardsContainerProps = {
  children?: React.ReactNode;
};

type StyledContainerProps = {
  isVisible?: boolean;
};

const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;

const CardsContainer = ({ children }: CardsContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default CardsContainer;
