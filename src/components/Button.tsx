import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  icon?: React.ReactNode;
  text?: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  all: unset;
  width: fit-content;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 18px;
  font-size: 18px;
  font-weight: 500;
  background-color: rgb(255, 233, 181);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.1s linear;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
  transition: 0.2s linear;

  :hover {
    background-color: rgb(255, 225, 181);
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }
  :active {
    background-color: rgb(255, 250, 181);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
`;

const Button = ({ icon, text, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      {icon}
      {text}
    </StyledButton>
  );
};

export default Button;
