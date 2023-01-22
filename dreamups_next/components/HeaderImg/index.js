import Link from 'next/link';

import { HeaderContainer, MainButton, WelcomeImg } from "./styles";

export default function HeaderImg() {
  return (
    <>
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