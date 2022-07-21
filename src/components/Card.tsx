import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IDetails } from '../views/DetailsView';

type CardProps = {
  details: IDetails;
};

const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  color: rgba(0, 0, 0, 1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  width: 320px;
  height: 320px;
  padding: 16px;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
  :active {
    background-color: #e7f6fe;
  }
`;

const Logo = styled.img`
  max-width: 100px;
`;

const Card = ({ details }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/:${details.id}`, { state: details });
  };

  return (
    <StyledCard onClick={handleClick}>
      <Logo src={details.logo} />
      <h1>{details.place}</h1>
      <p>{details.person}</p>
    </StyledCard>
  );
};

export default Card;
