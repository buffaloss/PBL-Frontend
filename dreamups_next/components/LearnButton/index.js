import React from "react";
import Link from 'next/link';
import { BtnWrapper, MainButton } from "./styles";

const LearnButton = () => {
  return (

    <>
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