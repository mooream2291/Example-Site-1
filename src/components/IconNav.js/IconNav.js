import React, { Component } from 'react';
import { IconsData } from './IconsData';

class NavIcons extends Component {

  render () {
    return(
      <nav className="Icons">
        <ul>
          {IconsData.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.icon} href={item.url}>
                  </a>
                </li>
              )
          })}
        </ul>
      </nav>
    )
  }
}

export default NavIcons;