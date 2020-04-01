import React from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import './Home.css';
import { useTranslation } from 'react-i18next';

function Home () {
  const { t } = useTranslation();
  const tMessage = t('example.nestedMessage.identifier');

  const AppHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    .App-logo{
      height: 40vmin;
      pointer-events: none;
    }
    .App-link {
      color: #61dafb;
    }
  `
  return (
    <div className="Home">
      <AppHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {tMessage}
        </p>
        <Link
          className="App-link"
          to="/contact"
        >
          Contact page
        </Link>
      </AppHeader>
    </div>
  );
}

export default Home;
