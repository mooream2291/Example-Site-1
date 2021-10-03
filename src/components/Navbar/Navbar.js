import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false }

  clickHandler = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  //write a function to tell us if the button was licked or not
  render() {
    return(
      <nav className="NavbarItems">
        <Link to=""/>
        <div className="menu-icon" onClick={this.clickHandler}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                  {item.title}
                  </a>
                </li>
              )
          })}
        </ul>
      </nav>
    )
  }
}


export default Navbar;