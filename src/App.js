import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Abogados from './components/pages/Abogados';
import Reseña from './components/pages/Reseña';
import Mapa from './components/pages/Mapa';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
 
        <Route path='/abogados' component={Abogados} />
        <Route path='/reseña' component={Reseña} />
        <Route path='/mapa' component={Mapa} />
       
      </Switch>
    </Router>
  );
}

export default App;
