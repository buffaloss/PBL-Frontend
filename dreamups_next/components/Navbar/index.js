import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Login from '../LoginPage';
import Register from "../RegisterPage";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  LoginItem,
  LoginIcon
} from './styles';

import { useSession, signOut } from "next-auth/react"


const Navbar = () => {

  const { data: session, status } = useSession()

  console.log(session)

  return (

    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link href="/">
            <img src="/dreamup_logo.png" style={{ width: 190 }} alt="Dreamup" />
          </Link>
        </NavLogo>
        <NavMenu>

          <Link href="/about">
            <NavItem>
              About
            </NavItem>
          </Link>

          <Link href="/products">
            <NavItem>
              Products
            </NavItem>
          </Link>

            <Link href="/mentors">
              <NavItem>
              Mentors
              </NavItem>
              </Link>

            <Link href="/contact">
              <NavItem>
              Contact
              </NavItem>
              </Link>

          {status !== "authenticated" &&
              <>
                <LoginItem>
                  <Login/>
                </LoginItem>
                <LoginItem>
                  <Register/>
                </LoginItem>
              </>
          }

          {status === "authenticated" &&
              <LoginIcon onClick={() => signOut()}>
                <img src="/login.png" width="30" height="25"/>
              </LoginIcon>
          }

        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}
export default Navbar;
