import styled from "styled-components";

export const AskedTitle = styled.div`
 font-family: 'Poppins';
 color: black;
 font-size: 45px;
 display: flex;
 margin-top:20px;
`;

export const Description = styled.div`
 font-family: 'Open Sans';
 color: black;
 font-size: 20px;
 display: flex;
 margin-top:10px;
 margin-bottom: 50px;
`;

export const Answers = styled.div`
 font-family: 'Open Sans';
 color: black;
 font-size: 20px;
 display: flex;
 margin-top:10px;
`;

export const Question = styled.div`
 font-family: 'Poppins';
 color: #ED1E79;
 font-size: 25px;
 display: flex;
 margin-top:35px;

`;

export const BtnWrapper = styled.div`
 margin-top: 50px;
 margin-left: 0px;
 max-width: 140px;
 display: flex;
 flex-direction: column;
 align-items: left;
 padding-top: 10px;
 
`;

export const MainButton = styled.div`
 border-radius: 10px;
 background: ${({ primary }) => (primary ? '#ED1E79' : '#ED1E79')};
 white-space: nowrap;
 padding: ${({ big }) => (big ? '14px 48px' : '13px 30px')};
 color: ${({ dark }) => (dark ? '#010606' : '#fff')};
 font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
 font-family: 'Open Sans';
 outline: none;
 border: none;
 cursor: pointer;
 width: 120px;
 height:40px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: 0 px;
 margin-bottom: 50px;
 transition: all 0.2s ease-in-out;

 &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ED1E79' : '#e0126c')};
 };
`
export const BtnText = styled.div`
 color: white;
`;
