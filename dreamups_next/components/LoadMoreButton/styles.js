import styled from "styled-components";

export const BtnWrapper = styled.div`
 margin-top: 30px;
 max-width: 140px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 10px;
 padding-bottom: 50px;
`;

export const MainButton = styled.div`
 border-radius: 10px;
 background: ${({ primary }) => (primary ? '#ED1E79' : '#ED1E79')};
 white-space: nowrap;
 padding: ${({ big }) => (big ? '14px 48px' : '13px 30px')};
 color: ${({ dark }) => (dark ? '#010606' : '#fff')};
 font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
 font-family: 'Open Sans', sans-serif;
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
export const BtnText = styled.div`
 color: white;
`;
