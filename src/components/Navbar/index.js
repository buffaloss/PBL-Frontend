import React from 'react';
import {FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks,NavBtn, NavBtnLink} from './NavbarElements';
import Image from '../../pictures/dreamups-logo-orizontal-color.png'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
</style>
const Navbar = () => {
  return (
    //put fragments instead of divs
    
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo >
                <img style = {{width: 300, height: 60}} src = {Image}/>
            </NavLogo>
            <MobileIcon>
              <FaBars/>
               </MobileIcon>
               <NavMenu>
                <NavItem>
                  <NavLinks to="about">
                    About 
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="products">
                    Products
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="mentors">
                    Mentors
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="contact">
                    Contact
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="login">
                    Login
                  </NavLinks>
                </NavItem>
               </NavMenu>
               
        </NavbarContainer>
      </Nav>
    </>
  )
}
export default Navbar;

// <NavBtn>
//<NavBtnLink to="/login">Login</NavBtnLink>
//</NavBtn> 