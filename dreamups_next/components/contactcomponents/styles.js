import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #dfdbdb;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 100px;
`

export const ContactInfo = styled.div`
    width: 100%;
    padding-top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;  
`

export const ContactQuestion = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;  
`

export const ContactItem = styled.p`
    width: 100%;
    align-items: center;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
`

export const FirstName = styled.p`
    
    margin-top: 15px;
    max-width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    margin-bottom: 25px;
`

export const LastName = styled.p`
    
    margin-top: 15px;
    max-width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    margin-bottom: 25px;
`

export const EmailItem = styled.p`
    
    margin-top: 30px;
    max-width: 100%;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    padding-top: 10px;
`

export const TextContainer = styled.p`
    margin-top: 30px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    padding-top: 10px;
`

export const BtnWrapper = styled.div`
//  position: absolute;
//  transform: translate(-50%, -50%); 
//  bottom: 5px;
//  right: 5px;
 margin-top: 10px;
 margin-left: 60px;
 max-width: 140px;
 display: flex;
 flex-direction: column;
 align-items: center;
padding-top: 30px;
 
`;

export const MainButton = styled.div`
//  margin-top: 100px; 
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
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: 0 px;
 transition: all 0.2s ease-in-out;

 &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ED1E79' : '#e0126c')};
 };
`