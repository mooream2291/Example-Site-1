import React, {useState, useEffect} from 'react'
import { Button } from '../../globalStyles';
import { 
  Nav,
  NavbarContainer,
  NavLogo, MobileIcon,
  NavMenu, NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink } from './Navbar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true);

  const clickHandler = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
            <MobileIcon onClick={clickHandler}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
          <NavMenu onClick={clickHandler} click={click}>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/projects'>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/contact'>Contact</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/contact">
                  <Button>Message</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/contact'>
                  <Button fontBig primary>
                    Message
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;
