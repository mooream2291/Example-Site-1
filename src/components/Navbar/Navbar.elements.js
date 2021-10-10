import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
background: black;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

//global style that can be used on any page
export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: white;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
align-items: right;
padding: 1.2rem
`
export const NavIcon = styled(FaBars)`
margin-right: 0.5rem;

`