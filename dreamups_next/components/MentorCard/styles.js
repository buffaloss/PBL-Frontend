import styled from "styled-components";

export const CardWrapper = styled.div`
 margin: 15px 15px 15px 15px;
 height: 570px;
 width: 300px;
 background-color: #E0E0E0;
`;

export const MentorImg = styled.p`
 align-items: center;
 position: relative;
 margin-left: -12px;
 margin-right: -12px;
`;

export const MentorName = styled.div`
 font-family: 'Open Sans';
 font-size: 25px;
 color: black;
 text-align: center;
 align-items: center;
 margin-top: 10px;
`;

export const MentorFunction = styled.div`
 font-family: 'Open Sans';
 font-size: 15px;
 color: #ED1E79;
 text-align: center;
 align-items: center;
`;

export const MentorCompany = styled.div`
  font-family: 'Open Sans';
font-size: 20px;
 color: black;
 text-align: center;
 align-items: center;
`;

export const MentorText = styled.div`
  font-family: 'Open Sans';
 font-size: 15px;
 color: black;
 text-align: center;
 margin-top: 15px;
`;


export const BtnWrapper = styled.div`
 max-width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 10px; 
`;

export const MainButton = styled.div`
 border-radius: 25px;
 background: ${({primary}) => (primary ? 'white' : 'white')};
 white-space: nowrap;
 padding: ${({big}) => (big ? '10px 10px' : '5px 20px')};
 color: ${({dark}) => (dark ? '#010606' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '18px' : '16px')};
 font-family: 'Open Sans';
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: 0 px;
 transition: all 0.2s ease-in-out;

 &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? 'white' : '#E8E8E8')};
 };
`;

export const BtnText = styled.div`
 color: black;
`;