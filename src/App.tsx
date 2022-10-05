import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BodyWrapper from './components/Wrapper/BodyWrapper';
import MainWrapper from './components/Wrapper/MainWrapper';

function App() {
  return (
    <MainWrapper>
      <Header />
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
      <Footer />
    </MainWrapper>
  );
}

export default App;
