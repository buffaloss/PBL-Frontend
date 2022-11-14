import Link from 'next/link';
import { BtnWrapper, MainButton, BtnText } from "./styles";



const LoadMoreButton = () => {
    return (
      <>
       <BtnWrapper>
            <MainButton to = "Load more" >
            <Link href="/mentors">
              <BtnText>
                Load more
              </BtnText>
              </Link>
            </MainButton>
        </BtnWrapper>
        </>
    )
  }
  export default LoadMoreButton;