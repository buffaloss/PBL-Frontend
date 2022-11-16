import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import Head from 'next/head';
import { BtnWrapper, MainButton } from "./styles";

const LearnButton = () => {
  return (

    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <BtnWrapper>
        <Link href="/about">
          <MainButton to="Learn more" >
            Learn more
          </MainButton>
        </Link>
      </BtnWrapper>
    </>
  )
}
export default LearnButton;