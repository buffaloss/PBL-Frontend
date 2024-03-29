import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100px;
  top: 0;
  display: flex;
  justify-content: left; //put the content(our container of Navrbar to the left)
  align-items:center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 9999;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 70px;
  background: #ffffff;
`
// the dreamups logo
export const NavLogo = styled.div` 
  align-items: flex-start;
  cursor: pointer;
`;

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

export const NavItem = styled.div`
  height:80px;
  font-family: 'Open Sans';
  font-weight: regular;
  font-size: 20px;
  color: #000;
  display: flex;
  align-items: right;
  text-decoration: none;
  text-align: right;
  padding: 0 1.6rem;
  height:150%;
  margin-right: 6px;
  position: absolute right;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

export const LoginItem = styled.div`
  height:80px;
  font-family: 'Open Sans';
  font-weight: regular;
  font-size: x-large;
  color: #000;
  display: flex;
  align-items: right;
  text-decoration: none;
  text-align: right;
  padding: 0 2px;
  height:150%;
  margin-left: 40px;
  margin-right: 20px;
  position: absolute right;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

export const LoginIcon = styled.div`
margin-right: 30px;
cursor: pointer;
`