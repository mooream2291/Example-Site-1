import React from 'react';
import { Navbar } from './components';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Home from './Pages/Homepage/Home';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
