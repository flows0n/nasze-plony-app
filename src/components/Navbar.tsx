import React from 'react';
import styled, { css } from 'styled-components';
import { pageTitle } from '../data/Data';
type NavbarProps = {
  children?: React.ReactNode;
};

type StyledNavbarProps = {
  scrolled?: boolean;
};

const StyledNavbar = styled.div<StyledNavbarProps>`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 80px;
  transition: 0.2s linear;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 1);

  ${(props) =>
    props.scrolled &&
    css`
      background-color: rgba(0, 0, 0, 0.7);
      color: rgba(255, 255, 255, 1);
    `}
`;

const Navbar = ({ children }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const changeColor = (): void => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', changeColor);
  return (
    <StyledNavbar scrolled={isScrolled}>
      <h1>{pageTitle}</h1>
      {children}
    </StyledNavbar>
  );
};

export default Navbar;
