import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import './Home.css';
import { useTranslation } from 'react-i18next';

function Home () {
  const { t } = useTranslation();
  const tMessage = t('example.nestedMessage.identifier');

  return (
    <div className="Home">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default Home;
