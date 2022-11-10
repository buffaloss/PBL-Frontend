import styled from "styled-components"

export const Main = styled.div`
 margin-top: 30px;
 z-index: 3;
 height: 400px;
 max-width: 800px;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 8 24 px;
 margin-left: 60px; 
`;

export const MainHeading = styled.h1`
 font-family: 'Poppins',sans-serif;
 color: #000;
 height: 600px;
 font-size: 70px;
 font-weight: normal;
 align-items: center;
 @media screen and (max-width: 768px){
    font-size: 40px;
 }
 @media screen and (max-width: 480px){
    font-size: 32px;
 }
`;

export const WelcomeText = styled.p`
 font-family: 'Poppins',sans-serif;
 margin-top: 5 px;
 color: #000;
 font-size: 40px;
 max-width: 800px;
 padding-right: 10px;
 @media screen and (max-width: 768px){
    font-size: 24px;
 }
 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;