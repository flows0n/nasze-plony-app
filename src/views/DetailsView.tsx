import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PhotoCarousel from '../components/PhotoCarousel';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { contact, photoGallery, description } from '../data/Constants';

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

const Title = styled.h1`
  align-self: center;
  text-align: center;
`;
const Person = styled.h3`
  font-weight: 400;
  align-self: center;
  text-align: center;
`;
const SubTitle = styled.h3`
  @media (max-width: 600px) {
    margin: 10px 0px;
  }
  margin: 10px 0 10px 30px;
  font-style: italic;
`;

const Description = styled.p`
  align-self: center;
  text-align: justify;
  width: 90%;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

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
  padding: 8px 16px;
  border-radius: 12px;
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
      <Person>{details.person}</Person>
      <SubTitle>{description}</SubTitle>
      <Description>{details.description}</Description>
      <SubTitle>{contact}</SubTitle>
      <LinksSection>
        <Link href={`tel:${details.phoneNumber}`}>
          <FiPhoneCall /> {details.phoneNumber}
        </Link>
        <Link href={`mailto:${details.email}`}>
          <FiMail /> {details.email}
        </Link>
      </LinksSection>
      {details.photos.length ? (
        <>
          <SubTitle>{photoGallery}</SubTitle>
          <PhotoCarousel photos={details.photos} />
        </>
      ) : (
        <></>
      )}
    </StyledContainer>
  );
};

export default DetailsView;
