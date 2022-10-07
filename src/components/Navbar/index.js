import React from 'react';
import {FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks} from './NavbarElements';

const Navbar = () => {
  return (
    //put fragments instead of divs
    
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                Dreamups
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