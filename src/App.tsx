import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainWrapper from './components/Wrapper/MainWrapper';

function App() {
  return (
    <MainWrapper>
      <Header />
      <Outlet />
      <Footer />
    </MainWrapper>
  );
}

export default App;
