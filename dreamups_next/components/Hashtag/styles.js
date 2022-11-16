import styled from "styled-components";

export const Main = styled.div`
 margin-top: 15px;
 border-radius: 15px;
 margin-bottom: 50px;
 z-index: 3;
 height: 35px;
 width: 110px;
 flex-basis: auto;
 position: left;
 display: flex;
 flex-direction: column;
 padding: 8 24 px;
 margin-left: 60px; 
 background-color: #E0E0E0;
`;

export const Text = styled.div`
 font-family: 'Open Sans', sans-serif;
 text-align: center;
 align-items: center;
 padding: 3px 0;
 font-size: 20px;
`;

export const CloseIcon = styled.div`
 align-items: right;
`;

export const OptionsText = styled.p`
 font-family: 'Open Sans',sans-serif;
 color: #ED1E79;
 font-size: 25px;
 padding-right: 0px;
 display: flex;

 @media screen and (max-width: 768px){
    font-size: 24px;
 }
 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;