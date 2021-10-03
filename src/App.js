import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NavIcons from './components/IconNav/IconNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <NavIcons />
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
