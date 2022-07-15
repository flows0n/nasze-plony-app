import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CardsContainer from '../components/CardsContainer';
import { data } from '../data/Data';

const StyledContainer = styled.div`
  width: 100%;
  height: 600px;
`;

const MainView = () => {
  return (
    <>
      <StyledContainer></StyledContainer>
      <CardsContainer>
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            place={item.place}
            description={item.description}
            logo={item.logo}
            person={item.person}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default MainView;
