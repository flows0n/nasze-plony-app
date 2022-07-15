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
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  transition: all 0.4s linear;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 1);

  h1 {
    font-size: 45px;
    transition: all 0.4s linear;
  }

  img {
    width: 100px;
    transition: all 0.4s linear;
  }

  ${(props) =>
    props.scrolled &&
    css`
      background-color: rgba(0, 0, 0, 0.7);
      color: rgba(255, 255, 255, 1);
      height: 80px;
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
    if (window.scrollY >= 80) {
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
