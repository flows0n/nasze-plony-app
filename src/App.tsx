import React from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import MainView from './views/MainView';
import { Routes, Route } from 'react-router-dom';
import DetailsView from './views/DetailsView';
import Footer from './components/Footer';

const StyledApp = styled.div`
  background: url('resources/field.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <Body>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path=":id" element={<DetailsView />} />
        </Routes>
      </Body>
      <Footer />
    </StyledApp>
  );
};

export default App;
