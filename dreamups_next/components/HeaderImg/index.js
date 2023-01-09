import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderContainer, MainButton, WelcomeImg } from "./styles";

export default function HeaderImg() {
  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
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