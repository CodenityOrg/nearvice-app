import React from 'react';
import styled from 'styled-components';

import Navbar from './components/includes/Navbar/index';
import NavbarButtons from './components/includes/Navbar/NavbarButtons/index';
import Footer from './components/includes/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import LoginModal from './components/LoginModal';

import useLoginModalHook from './hooks/loginModalHook';

function App () {
  const AppContainer = styled.div`
    text-align: center;
  `
  const [isLoginVisible, handleLoginClick, handleLoginModalClose] = useLoginModalHook();

  return (
    <AppContainer>
      <Navbar>
        <NavbarButtons
          onLoginClick={handleLoginClick}
        />
      </Navbar>
      <LoginModal isOpen={isLoginVisible} closeModal={handleLoginModalClose} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        {/* no match routes */}
        <Route exact component={NotFound} />
      </Switch>
      <Footer />
    </AppContainer>
  );
}

export default App;
