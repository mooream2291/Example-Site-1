import React from 'react';
import TestStyledComp from './components/TestComp';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <TestStyledComp />
    </Router>
  );
}

export default App;
