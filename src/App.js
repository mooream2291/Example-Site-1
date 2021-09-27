import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Poll from './components/poll';
import Blog from './components/blog';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path ='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
        <Route path='/poll' component={Poll} />
        <Route path='/blog' component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
