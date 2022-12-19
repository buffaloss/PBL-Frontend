import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import Head from 'next/head';
import { BtnWrapper, MainButton } from "./styles";

const LearnButton = () => {
  return (

    <>
       <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
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