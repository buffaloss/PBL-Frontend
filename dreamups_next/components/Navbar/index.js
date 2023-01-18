import Link from 'next/link';
import Login from '../LoginPage';
import Register from "../RegisterPage";
import Product from '../Productdropdown';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  LoginItem,
  LoginIcon
} from './styles';
import { useSession, signOut } from "next-auth/react";
import Head from 'next/head';
import { useRouter } from "next/router";


const Navbar = () => {
  const router = useRouter()
  const { status } = useSession()

  // console.log(session)

  return (
    <>
      <Head>
         
      </Head>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link href="/">
              <img src="/dreamup_logo.png" style={{ width: 190 }} alt="Dreamups" />
            </Link>
          </NavLogo>
          <NavMenu>

            <Link href="/about">
              <NavItem>
                About
              </NavItem>
            </Link>

            
              <NavItem>
                <Product>
                  
                </Product>
              </NavItem>
            

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
              <LoginIcon onClick={() => { signOut() }}>
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
