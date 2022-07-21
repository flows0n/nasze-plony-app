import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CardsContainer from '../components/CardsContainer';
import Container from '../components/Container';
import { data, mainInfo } from '../data/Data';

const LogosSection = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 80px;
`;

const Description = styled.div`
  text-align: center;
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;
`;

const MainView = () => {
  return (
    <>
      <Container>
        <LogosSection>
          <Logo src="/resources/logos/eu.jpg" alt="EU Logo" />
          <Logo src="/resources/logos/prow.jpg" alt="PROW Logo" />
        </LogosSection>
        <Description>
          {mainInfo[0]}
          <br />
          <br />
          {mainInfo[1]}
          <br />
          <br />
          <b>
            {mainInfo[2]}
            <br />
            {mainInfo[3]}
          </b>
          <br />
          <br />
          {mainInfo[4]}
        </Description>
      </Container>
      <>
        <Title>Gospodarstwa biorące udział w projekcie:</Title>
        <CardsContainer>
          {data.map((item, index) => (
            <Card key={index} details={item} />
          ))}
        </CardsContainer>
      </>
    </>
  );
};

export default MainView;
