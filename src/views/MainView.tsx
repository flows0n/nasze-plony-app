import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CardsContainer from '../components/CardsContainer';
import { data } from '../data/Data';

const StyledContainer = styled.div`
  width: 80%;
  height: 600px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: black;
  }
`;

const MainView = () => {
  return (
    <>
      <StyledContainer>
        <p>
          Tytuł projektu: “Konsorcjum na rzecz, tworzenia krótkich łańcuchów
          dostaw w zakresie sprzedaży serów kozich, owczych, krowich –
          dojrzewających, podpuszczkowych, jogurtów kozich, owczych i krowich”.
          <br />
          Projekt finansowany przez: Europejski Fundusz Rolny na rzecz Rozwoju
          Obszarów Wiejskich PROW 2014 – 2020 Działanie 16 „Współpraca” w
          przedmiocie operacji: tworzenie krótkich łańcuchów dostaw na zasadach
          płatności zryczałtowanej.
          <br />
          Wartość projektu 325 000,00 zł Środki EFRROW 206797,50 zł co stanowi
          63,63% przyznanej pomocy.
          <br />
          Krajowe środkipubliczne 118202,50zł co stanowi 36,37% przyznanej
          pomocy.
          <br />
          Okres realizacji operacji – 19.01.2022 r. do 31.12.2022 r.
        </p>
        <h1>Zobacz inwestycje biorące udział w projekcie:</h1>
      </StyledContainer>
      <CardsContainer>
        {data.map((item, index) => (
          <Card key={index} details={item} />
        ))}
      </CardsContainer>
    </>
  );
};

export default MainView;
