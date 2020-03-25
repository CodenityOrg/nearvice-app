import React from 'react';
import styled from 'styled-components'

import Navbar from './components/includes/Navbar';
import Footer from './components/includes/Footer';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

import LoginModal from './components/LoginModal';

function App () {
  const AppContainer = styled.div`
    text-align: center;
  `
  return (
    <AppContainer>
      <Navbar title={'Nearvice 0.1.0'} />
      <LoginModal />
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
