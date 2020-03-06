import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function App () {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />

      {/* no match routes */}
      <Route exact component={NotFound} />
    </Switch>
  );
}

export default App;
