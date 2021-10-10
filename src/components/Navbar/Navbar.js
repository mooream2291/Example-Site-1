import React, {useState} from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon } from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [click, setClick] = useState(false)

  const clickHandler = () => setClick(!click);
  
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            LOGO
          </NavLogo>
            <MobileIcon onClick={clickHandler}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
