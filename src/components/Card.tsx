import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  id: number;
  logo: string;
  place: string;
  person?: string;
  description: string;
  children?: React.ReactNode;
};

const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  color: rgba(0, 0, 0, 1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 40%;
  min-width: 300px;
  height: 300px;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-content: start;
  align-items: center;
  text-align: center;

  transition: 0.2s linear;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
  :active {
    background-color: #e7f6fe;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin: 4px 0 8px 0;
`;

const Card = (props: CardProps) => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    console.log(props.id);
    navigate(`/:${props.id}`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <Logo src={props.logo} />
      <h1>{props.place}</h1>
      <p>{props.person}</p>
    </StyledCard>
  );
};

export default Card;
