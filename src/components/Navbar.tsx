import React from 'react';
import styled, { css } from 'styled-components';
import { pageTitle } from '../data/Constants';

type NavbarProps = {
  children?: React.ReactNode;
};

type StyledNavbarProps = {
  scrolled?: boolean;
};

const StyledNavbar = styled.div<StyledNavbarProps>`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  transition: 0.3s linear;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 1);

  h1 {
    font-size: 45px;
    transition: 0.3s linear;
  }

  img {
    width: 100px;
    transition: 0.3s linear;
  }

  ${(props) =>
    props.scrolled &&
    css`
      background-color: rgba(0, 0, 0, 0.6);
      color: rgba(255, 255, 255, 1);
      height: 60px;
      flex-direction: row;
      h1 {
        font-size: 20px;
      }
      img {
        width: 50px;
        margin: 0;
      }
    `}
`;

const Navbar = ({ children }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const changeColor = (): void => {
    if (window.scrollY >= 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', changeColor);
  return (
    <StyledNavbar scrolled={isScrolled}>
      <img src="/resources/temp.svg" />
      <h1>{pageTitle}</h1>
      {children}
    </StyledNavbar>
  );
};

export default Navbar;
