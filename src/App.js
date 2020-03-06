import React from 'react';
import Navbar from './components/includes/Navbar';
import Footer from './components/includes/Footer';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App () {
  const { t } = useTranslation();
  const tMessage = t('example.nestedMessage.identifier');
  return (
    <div className="App">
      <Navbar />
        {tMessage}
      <Footer />
    </div>
  );
}

export default App;
