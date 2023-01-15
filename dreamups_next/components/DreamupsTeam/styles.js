import styled from "styled-components";

export const TeamContainer = styled.div`
height: 900px;
position: relative;
display: flex;
flex-direction: column;
padding: 5 5 px;
background-color: #ED1E79;
//border-top: 1px solid #ED1E79;
`;

export const HeadingTeam= styled.div`
font-family: 'Poppins',sans-serif;
color: #1B1464;
font-size: 45px;
margin-top:35px;
font-weight: normal;;
margin-left:15px;
align-items: center;
text-align: center;
@media screen and (max-width: 768px){
  font-size: 40px;
}
@media screen and (max-width: 480px){
  font-size: 32px;
}
`;

export const TeamMemberImg = styled.div`
margin-top:50px;
display: flex;
justify-content: center;
`;

export const TeamMemberName = styled.div`
font-family: 'Poppins',sans-serif;
margin-top:15px;
color: black;
font-size: 19px;
font-weight: normal;
align-items: center;
text-align: center;
@media screen and (max-width: 768px){
  font-size: 40px;
}
@media screen and (max-width: 480px){
  font-size: 32px;
}
`;

export const TeamMemberFunction = styled.div`
font-family: 'Open Sans',sans-serif;
color: black;
font-size: 19px;
font-weight: normal;
align-items: center;
text-align: center;
@media screen and (max-width: 768px){
  font-size: 40px;
}
@media screen and (max-width: 480px){
  font-size: 32px;
}
`;
