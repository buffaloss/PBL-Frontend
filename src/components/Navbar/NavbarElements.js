// storing our stock components
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
</style>


export const Nav = styled.nav`
  background: #ffffff;
  height: 230px;
  margin-top: 1.0;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  align-items: left;
  margin-left: 1px;
  display: flex;
  justify-content: space-between;
  height: 120px;
  z-index: 1;
  width: 100%;
  padding: 0 24 px;
  max-width: 1200px;
`

export const NavLogo = styled(LinkR)` 
   height: 800px;
   width: 800px;
   align-items: flex-start;

`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px ) {

  display: block;
  position: absolute;
  top:0;
  right:0;
  transform: translate(-100%,60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #000;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width:768px){
  display:none;
}
`

export const NavItem = styled.li`
  height:80px;

`

export const NavLinks = styled(LinkScroll)`
  font-family: 'Open Sans', sans-serif;
  font-weight: regular;
  font-size: x-large;
  color: #000;
  display: flex;
  //align-items: right;
  text-decoration: none;
  //text-align: right;
  padding: 0 1.6rem;
  height:150%;
  //margin-right: 6px;
  //position: absolute right;
  cursor: pointer;
  //align-self: flex-end;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display:none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius:50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline:none;
  border:none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

`

