import React from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import MainView from './views/MainView';
import { Routes, Route } from 'react-router-dom';
import CardDetails from './views/CardDetails';

const StyledApp = styled.div`
  background: url('resources/field.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 800px;
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
          <Route path=":id" element={<CardDetails />} />
        </Routes>
      </Body>
    </StyledApp>
  );
};

export default App;
