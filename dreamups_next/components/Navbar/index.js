import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import LoginPage from '../LoginPage';
import App from '../LoginPage';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
</style>
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  LoginItem,
  LoginIcon
} from './styles';

const Navbar = () => {
  return (

    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <img src="/dreamup_logo.png" width="350" height="70" alt="Dreamup" />
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
              <img src="/login.png" width="30" height="25" />
            </LoginIcon>

          </NavMenu>
        </NavbarContainer>
      </Nav>

    </>
  )
}
export default Navbar;