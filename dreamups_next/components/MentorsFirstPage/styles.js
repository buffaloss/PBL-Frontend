import styled from "styled-components";

export const Main = styled.div`
 margin-top: 100px;
 z-index: 3;
 height: 400px;
 max-width: 800px;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 5 5 px;
 margin-left: 60px; 
 background-color: white;
`;

export const MainHeading = styled.h1`
 font-family: 'Poppins',sans-serif;
 color: #000;
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
 font-family: 'Open Sans',sans-serif;
 color: #000;
 font-size: 35px;
 max-width: 800px;
 padding-right: 10px;
 @media screen and (max-width: 768px){
    font-size: 24px;
 }
 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;

export const MentorImg = styled.p`
 align-items: right;
 margin-left: 150px;
 position: relative;
 margin-top: 100px;
 
 `;
