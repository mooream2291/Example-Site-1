import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TestStyledComp from './components/TestComp';
// import NavIcons from './components/Icons/IconNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
function App() {
  return (
    <div className='App'>
      <Navbar />
      <TestStyledComp />
    </div>
  );
}

export default App;
