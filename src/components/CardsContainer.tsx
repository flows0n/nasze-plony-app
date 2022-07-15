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
  max-width: 85%;
  gap: 20px;
`;

const CardsContainer = ({ children }: CardsContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default CardsContainer;
