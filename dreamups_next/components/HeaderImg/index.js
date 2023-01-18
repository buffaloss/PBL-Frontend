import Head from 'next/head';
import Link from 'next/link';

import { HeaderContainer, MainButton, WelcomeImg } from "./styles";

export default function HeaderImg() {
  return (
    <>
      <Head>
         
      </Head>
      <HeaderContainer>
        <WelcomeImg>
          <img src="/unicornheader1.jpg" />
        </WelcomeImg>
        <Link href="/about">
          <MainButton to="Learn more" >
            Learn more
          </MainButton>
        </Link>
      </HeaderContainer>
    </>
  )
}