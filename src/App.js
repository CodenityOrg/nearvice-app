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
function useTraceUpdate (props) {
  const prev = React.useRef(props);
  React.useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps);
    }
    prev.current = props;
  });
}

function App (props) {

  useTraceUpdate(props);
  const [isLoginVisible, setLoginVisibleTrue, setLoginVisibleFalse] = useBoolToggler();
  const [isRegisterVisible, setRegisterVisibleTrue, setRegisterVisibleFalse] = useBoolToggler();

  const [isDrawerVisible, , , toggleIsDrawerVisible] = useBoolToggler();

  const toggleDrawerHandler = React.useCallback(() => {
    toggleIsDrawerVisible();
  }, [toggleIsDrawerVisible]);
  
  return (
    <>
      <Navbar
        toggleDrawer={toggleDrawerHandler}
      >
        <NavbarButtons
          onSignInClick={setLoginVisibleTrue}
          onSignUpClick={setRegisterVisibleTrue}
        />
      </Navbar>
      <SideDrawer
        isOpen={isDrawerVisible}
        handleClose={toggleDrawerHandler}
        onSignInClick={setLoginVisibleTrue}
        onSignUpClick={setRegisterVisibleTrue}
      />
      <LoginModal isOpen={isLoginVisible} closeModal={setLoginVisibleFalse} />
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
