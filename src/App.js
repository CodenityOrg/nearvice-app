import React from 'react';

import Navbar from './components/includes/Navbar/index';
import NavbarButtons from './components/includes/Navbar/NavbarButtons/index';
import Footer from './components/includes/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

import LoginModal from './components/LoginModal';
import SideDrawer from './components/includes/SideDrawer/index.js';

import useBoolToggler from './hooks/boolToggler';

function App () {
  const [isLoginVisible, handleLoginClick, handleLoginModalClose] = useBoolToggler();

  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);

  const toggleDrawerHandler = React.useCallback(() => {
    setIsDrawerVisible(state => !state);
  }, [setIsDrawerVisible]);
  
  return (
    <>
      <Navbar
        toggleDrawer={toggleDrawerHandler}
      >
        <NavbarButtons
          onLoginClick={handleLoginClick}
        />
      </Navbar>
      <SideDrawer
        isOpen={isDrawerVisible}
        handleClose={toggleDrawerHandler}
        onLoginClick={handleLoginClick}
      />
      <LoginModal isOpen={isLoginVisible} closeModal={handleLoginModalClose} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        {/* no match routes */}
        <Route exact component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
