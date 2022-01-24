import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Abogados from './components/Abogados/Abogados';
import Reseña from './components/Reseña/Reseña';
import Mapa from './components/Mapa/Mapa';


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
