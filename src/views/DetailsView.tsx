import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PhotoCarousel from '../components/PhotoCarousel';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { contact, photoGallery, description } from '../data/Constants';
import { FiArrowLeft } from 'react-icons/fi';
import Container from '../components/Container';
import Button from '../components/Button';

export type IDetails = {
  id: number;
  logo: string;
  person: string;
  link: string;
  place: string;
  description: string;
  phoneNumbers: string[];
  email: string;
  photos: string[];
};

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  align-items: center;
`;

const TitleContainer = styled.div`
  grid-column: 2;
  text-align: center;
`;

const ButtonContainer = styled.div`
  grid-column: 1;
`;

const Person = styled.h3`
  font-weight: 400;
`;

const SubTitle = styled.h3`
  margin: 10px 0;

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
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 18px;
  background-color: rgba(255, 255, 255, 1);
  transition: 0.2s linear;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

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
  const navigate = useNavigate();

  const handleBackClick = (): void => {
    navigate(-1);
  };

  return (
    <Container>
      <HeaderContainer>
        <ButtonContainer>
          <Button
            onClick={handleBackClick}
            icon={<FiArrowLeft size="1.5em" />}
          />
        </ButtonContainer>
        <TitleContainer>
          <h1>{details.place}</h1>
          <Person>{details.person}</Person>
        </TitleContainer>
      </HeaderContainer>
      <SubTitle>{description}</SubTitle>
      <Description>{details.description}</Description>
      <SubTitle>{contact}</SubTitle>
      <LinksSection>
        {details.phoneNumbers?.map((x, i) => {
          return (
            <Link key={i} href={`tel:${x}`}>
              <FiPhoneCall /> {x}
            </Link>
          );
        })}

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
        ''
      )}
    </Container>
  );
};

export default DetailsView;
