import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PhotoCarousel from '../components/PhotoCarousel';
import { FiPhoneCall, FiMail } from 'react-icons/fi';

export type IDetails = {
  id: number;
  logo: string;
  person: string;
  place: string;
  description: string;
  phoneNumber: string;
  email: string;
  photos: string[];
};

const StyledContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 32px;
  color: black;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  margin: 180px 0 20px;
  max-width: 60%;
  min-width: 300px;
  height: fit-content;
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1``;
const SubTitle = styled.h3``;
const Description = styled.p``;

const LinksSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px 20px;
  margin: 20px 0;
`;

const Link = styled.a`
  all: unset;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 18px;
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;

  transition: 0.2s linear;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
  :active {
    background-color: #e7f6fe;
  }
`;

const DetailsView = () => {
  const location = useLocation();
  const details = location.state as IDetails;

  return (
    <StyledContainer>
      <Title>{details.place}</Title>
      <SubTitle>{details.person}</SubTitle>
      <Description>{details.description}</Description>
      <LinksSection>
        <Link href={`tel:${details.phoneNumber}`}>
          <FiPhoneCall /> {details.phoneNumber}
        </Link>
        <Link href={`mailto:${details.email}`}>
          <FiMail /> {details.email}
        </Link>
      </LinksSection>
      <PhotoCarousel photos={details.photos} />
    </StyledContainer>
  );
};

export default DetailsView;
