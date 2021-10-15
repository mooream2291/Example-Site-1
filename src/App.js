import React from 'react';
import TestStyledComp from './components/TestComp';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <TestStyledComp />
    </Router>
  );
}

export default App;
