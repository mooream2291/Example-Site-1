import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TestStyledComp from './components/TestComp';
import { Grid, Row, Column } from './components/Grid';
// import NavIcons from './components/Icons/IconNav';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
function App() {
  return (
    <div className='App'>
      <h1>Ashley Moore</h1>
      <h3>Software Engineer</h3>
      <Grid>
        <Row>
          <Column size={3}>
          </Column>
        </Row>
        <Row>
          <Column size={2}>
            I WILL EXPAND
          </Column>
          <Column size={1} collapse="xs">
            byeeeee
          </Column>
          <Column size={1}>
            I WILL EXPAND
          </Column>
        </Row>
      </Grid>
      <TestStyledComp />
    </div>
  );
}

export default App;
