import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  width: 50 %;
`

export const WelcomeImg = styled.image`
  width: 100 %;
  height: auto;
`
export const MainButton = styled.button`
  position: absolute;
  top: 85%;
  left: 10%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background: ${({ primary }) => (primary ? '#ED1E79' : '#ED1E79')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '13px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-family: 'Open Sans';
`
