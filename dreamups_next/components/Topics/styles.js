import styled from "styled-components";

export const Main = styled.div`
 height: 400px;
 max-width: 100%;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 0 0 px;
 background-color: white;
`;

export const TextContainer = styled.div`
 margin-left: 60px;

`;

export const MainHeading = styled.h1`
 font-family: 'Poppins';
 color: black;
 font-size: 50px;
 font-weight: normal;
 align-items: center;
 display: flex;
 margin-top: 50px;
 margin-bottom: 50px;
 @media screen and (max-width: 768px){
    font-size: 40px;
 }
 @media screen and (max-width: 480px){
    font-size: 32px;
 }
`;

export const Text = styled.p`
 font-family: 'Open Sans';
 color: #ED1E79;
 font-size: 30px;
 padding-right: 0px;
 display: flex;

 @media screen and (max-width: 768px){
    font-size: 24px;
 }
 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;
