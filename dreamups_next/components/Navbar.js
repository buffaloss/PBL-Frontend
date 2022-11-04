import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import LoginPage from './LoginPage';
import App from './LoginPage';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
</style>


export const Nav = styled.nav`
  height: 180px;
  margin-top: 0px; //no margin top;
  display: flex;
  justify-content: left; //put the content(our container of Navrbar to the left)
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
  align-items: center;
  margin-left: 60px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 30 px;
  max-width: 1700px;;
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
  font-family: 'Open Sans', sans-serif;
  font-weight: regular;
  font-size: x-large;
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
  font-family: 'Open Sans', sans-serif;
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

const Navbar = () => {
    return (
  
      <>
        <Nav>
          <NavbarContainer>
          <NavLogo>
              <img src="/dreamup_logo.png" width = "350" height="70" alt = "Dreamup" />
             </NavLogo>
            <NavMenu>

              <NavItem>
                 <Link href="/about">About</Link>
                 </NavItem>

                 <NavItem>
                 <Link href="/products">Products</Link>
                 </NavItem>

                 <NavItem>
                 <Link href="/mentors">Mentors</Link>
                 </NavItem>

                 <NavItem>
                 <Link href="/contact">Contact</Link>
                 </NavItem>

                <LoginItem>
                  <App>
                  </App>
                </LoginItem>
                 

                 <LoginIcon>
                  <img src="/login.png" width = "30" height = "25" />
                 </LoginIcon>

             </NavMenu>
          </NavbarContainer>
        </Nav>

      </>
    )
  }
  export default Navbar;