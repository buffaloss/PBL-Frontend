import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import { BtnWrapper, MainButton } from "./styles";

const LearnButton = () => {
    return (
  
      <>
       <BtnWrapper>
            <MainButton to = "Learn more" >
            <Link href="/about">
              Learn more 
              </Link>
            </MainButton>
        </BtnWrapper>
      </>
    )
  }
  export default LearnButton;