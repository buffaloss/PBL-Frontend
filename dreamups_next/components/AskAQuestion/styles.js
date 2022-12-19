import styled from "styled-components";


export const AskContainer = styled.div`
 width:600px;
 height:flex;
 background-color: #E0E0E0;
 margin-left: 60px;
 margin-top:100px;
 overflow: auto;
  .nextui-input-main-container{
    background-color: white;
  }
`;


export const AskTitle = styled.div`
 font-size:45px;
 font-family: 'Poppins';
 color: black;
 text-align: left;
 margin-left: 30px;
 margin-bottom:10px;
 margin-top:30px;
 
`;

export const AskText = styled.div`
font-family: 'Open Sans';
font-size: 23px;
color:black;
text-align:left;
margin-left:30px;
margin-right: 30px;

`;

export const FNameWrapper = styled.div`
 margin-top: 15px;
 margin-left:30px;
 max-width: 250px;
 height: 30px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 10px;
 margin-bottom: 25px;
`;

export const LNameWrapper = styled.div`
 margin-top: 15px;
 margin-left:0px;
 max-width: 250px;
 height: 30px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 10px;
 margin-bottom: 25px;
`;


export const EmailWrapper = styled.div`
 margin-top: 15px;
 margin-left:30px;
 max-width: 555px;
 height: 30px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 10px;
 margin-bottom: 25px;
`;


export const MsgWrapper = styled.div`
 margin-top: 15px;
 margin-left:30px;
 max-width: 555px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 10px;
 margin-bottom: 25px;
`;

export const CheckboxWrapper = styled.div`
 margin-top: 0px;
 margin-left:30px;
 display: flex;
 flex-direction: column;
 align-items: left;
 padding-top: 10px;
 margin-bottom: 25px;
`;

export const BtnWrapper = styled.div`
 margin-top: 0px;
 align-items: right;
  max-width: 100px;
 display: flex;
 flex-direction: column;
 padding-top: 10px;
 
`;

export const MainButton = styled.div`
 border-radius: 10px;
 background: ${({primary}) => (primary ? '#ED1E79' : '#ED1E79')};
 white-space: nowrap;
 padding: ${({big}) => (big ? '24px 15px' : '10px 20px')};
 color: ${({dark}) => (dark ? '#010606' : '#fff')};
 font-size: ${({fontBig}) => (fontBig ? '30px' : '25px')};
 font-family: 'Open Sans';
 outline: none;
 border: none;
 margin-left: 375px;
 width: 180px;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: 0 px;
 transition: all 0.2s ease-in-out;

 &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#ED1E79' : '#e0126c' )};
 };
`;
