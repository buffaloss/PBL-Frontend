import styled from "styled-components";

export const Main = styled.div`
 margin-top: 100px;
 height: 600px;
 max-width: 100%;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 0 0 px;
 background-color: #E8E8E8;
`;

export const TextContainer = styled.div`
 margin-left: 60px;

`;

export const MainHeading = styled.h1`
 font-family: 'Open Sans',sans-serif;
 color: #888888;
 font-size: 250px;
 font-weight: normal;
 align-items: center;
 display: flex;
 margin-top: -70px;
 margin-bottom: -60px;
 @media screen and (max-width: 768px){
    font-size: 40px;
 }
 @media screen and (max-width: 480px){
    font-size: 32px;
 }
`;

export const Text1 = styled.p`
 font-family: 'Open Sans',sans-serif;
 color: #888888;
 font-size: 50px;
 padding-right: 0px;
 display: flex;
 margin-top: 100px;
 margin-bottom: 0px;
 @media screen and (max-width: 768px){
    font-size: 24px;
 }
 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;

export const Text2 = styled.p`
 font-family: 'Open Sans',sans-serif;
 color: #888888;
 font-size: 50px;
 padding-right: 0px;
 display: flex;
 margin-bottom: 0px;
 @media screen and (max-width: 768px){
    font-size: 24px;
 }
 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;

export const Text3 = styled.p`
 font-family: 'Poppins',sans-serif;
 color: #000;
 font-size: 50px;
 padding-right: 0px;
 display: flex;
 margin-top: 100px;
 margin-bottom: 0px;
 @media screen and (max-width: 768px){
    font-size: 24px;
 }
 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;


export const Text4 = styled.p`
 font-family: 'Open Sans',sans-serif;
 color: #000;
 font-size: 25px;
 padding-right: 0px;
 display: flex;
 text-align: center;
 margin-left: -20px;;
 @media screen and (max-width: 768px){
    font-size: 24px;
 }
 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;


export const Number = styled.div`
 margin-left: -30px;
 margin-top: 15px;
 display: inline-block;
`;

export const Arrow = styled.div`
 margin-top:75px;
 position: center;
 margin-left: 0px;
 margin-right: 0 px;
 display: inline-block;
`;