import styled from "styled-components";

export const MainContainer = styled.div`
 height: 600px;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 5 5 px;

 background-color: #ED1E79;
`;
 
export const MainImg = styled.p`
 align-items: left;
 position: relative;
 margin-top: 25%;
 `;

export const MainHeading = styled.h1`
font-family: 'Poppins',sans-serif;
color: #1B1464;
font-size: 50px;
font-weight: normal;
margin-top: 16%;
margin-left:15px;
align-items: center;
@media screen and (max-width: 768px){
   font-size: 40px;
}
@media screen and (max-width: 480px){
   font-size: 32px;
}
`;

export const SecondContainer = styled.div`
 height: 400px;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 5 5 px;
`;

export const Heading = styled.div`
font-family: 'Poppins',sans-serif;
color: #1B1464;
font-size: 35px;
margin-top:100px;
font-weight: normal;;
margin-left:15px;
align-items: left;
text-align: left;
@media screen and (max-width: 768px){
   font-size: 40px;
}
@media screen and (max-width: 480px){
   font-size: 32px;
}
`;

export const TextInfo = styled.div`
font-family: 'Open Sans',sans-serif;
color: #ED1E79;
margin-top:100px;
font-size: 20px;
font-weight: bold;
margin-left:15px;
align-items: center;
text-align: left;
@media screen and (max-width: 768px){
   font-size: 40px;
}
@media screen and (max-width: 480px){
   font-size: 32px;
}
`;

export const ThirdContainer = styled.div`
 height: 400px;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 5 5 px;
 background-color: #ED1E79 ;
`;

export const IconImg = styled.div`
 align-items: left;
 position: relative;
 margin-top: 25%;
`;

export const Info = styled.div`
font-family: 'Open Sans',sans-serif;
color: #ED1E79;
margin-top:100px;
font-size: 20px;
font-weight: bold;
margin-left:15px;
align-items: center;
text-align: left;
@media screen and (max-width: 768px){
   font-size: 40px;
}
@media screen and (max-width: 480px){
   font-size: 32px;
}
`;