import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CardsContainer from '../components/CardsContainer';
import Container from '../components/Container';
import { data } from '../data/Data';

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
          Tytuł projektu: “Konsorcjum na rzecz, tworzenia krótkich łańcuchów
          dostaw oraz rozwoju małych gospodarstw rolnych i przedsiębiorstw”.
          <br />
          <br />
          Projekt finansowany przez: Europejski Fundusz Rolny na rzecz Rozwoju
          Obszarów Wiejskich PROW 2014 – 2020 Działanie 16 „Współpraca” w
          przedmiocie operacji: tworzenie krótkich łańcuchów dostaw na zasadach
          płatności zryczałtowanej.
          <br />
          <br />
          <b>
            Wartość projektu 325 000,00 zł Środki EFRROW 206797,50 zł co stanowi
            63,63% przyznanej pomocy.
          </b>
          <br />
          <b>
            Krajowe środki publiczne 118202,50zł co stanowi 36,37% przyznanej
            pomocy.
          </b>
          <br />
          <br />
          Okres realizacji operacji – 19.01.2022 r. do 31.12.2022 r.
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
