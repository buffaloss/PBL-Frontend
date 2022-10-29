import styled from "styled-components";

export const WelcomeImg = styled.p`
 align-items: right;
 margin-left: 1100px;
 position: relative;
 z-index: 25;
 margin-top: -550px;
`
const MainImg = () => {
    return (
  
      <>
      <WelcomeImg>
      <img src="/unicorn.png" width = "550" height="610" alt = "Welcome Image" />
      </WelcomeImg>
      </>
    )
  }
  export default MainImg;