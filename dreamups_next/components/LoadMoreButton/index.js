import React, { useEffect, useRef } from "react";
import Link from 'next/link';
import { BtnWrapper, MainButton } from "./styles";

const LoadMoreButton = () => {
    return (
  
      <>
       <BtnWrapper>
            <MainButton to = "Load more" >
            <Link href="/">
              Load more
              </Link>
            </MainButton>
        </BtnWrapper>
      </>
    )
  }
  export default LoadMoreButton;