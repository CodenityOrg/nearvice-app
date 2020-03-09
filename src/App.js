import React from 'react';
import Navbar from './components/includes/Navbar';
import Footer from './components/includes/Footer';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function App () {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />

          {/* no match routes */}
          <Route exact component={NotFound} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
