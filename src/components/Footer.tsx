import styled from 'styled-components';
import { footer } from '../data/Constants';

type StyledFooterProps = {
  children?: React.ReactNode;
};

const StyledFooter = styled.div<StyledFooterProps>`
  margin-top: auto;
  height: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 1);
  font-size: 14px;

  @media (max-width: 800px) {
    height: 30px;
    font-size: 12px;
  }
`;

const Footer = () => {
  const today = new Date();
  const actualYear = today.getFullYear();
  return (
    <StyledFooter>
      {footer}
      {actualYear}
    </StyledFooter>
  );
};

export default Footer;
