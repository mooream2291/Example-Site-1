import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import NavIcons from './components/Icons/IconNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      {/* <NavIcons /> */}
      <Navbar />
    </div>
  );
}

export default App;
