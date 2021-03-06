import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Serif Pro', serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
padding-right: 30px;
padding-left: 50px;
}
`;

export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? '#e5e3ca' : 'black') };
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: white;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
  transition: all 0.3s ease-out;
  background: white;
  background: ${({primary}) => (primary ? 'black' : '#e5e3ca') };
}

@media screen and (max-width: 960px) {
  width: 100%auto;
}
`
export default GlobalStyle