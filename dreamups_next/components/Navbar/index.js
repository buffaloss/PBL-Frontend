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
import Head from 'next/head';


const Navbar = () => {

  const { data: session, status } = useSession()

  console.log(session)

  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
      </Head>
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
                  <Login />
                </LoginItem>
                <LoginItem>
                  <Register />
                </LoginItem>
              </>
            }

            {status === "authenticated" &&
              <LoginIcon onClick={() => signOut()}>
                <img src="/login.png" width="30" height="25" />
              </LoginIcon>
            }

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}
export default Navbar;
