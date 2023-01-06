import styled from "styled-components";

export const SearchWrapper = styled.div`
 margin-top: 15px;
 width: 500px;
 display: flex;
 padding-top: 10px;
 margin-bottom: 25px;
 margin-left: 345px;
`;

export const MainButton = styled.button`
  padding: 10px 19px;
  background: ${({ primary }) => (primary ? '#ED1E79' : '#ED1E79')};
  white-space: nowrap;
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-family: 'Open Sans';
`

export const DefaultWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  padding-top: 10px;
  margin-bottom: 25px;
  margin-left: 500px;
  margin-right: 500px;
`

// export const Wrapper = styled.div`
//   margin-top: 15px;
//   display: relative;
//   padding-top: 10px;
//   margin-bottom: 25px;
//   margin-left: 32.913%;
//   margin-right: 500px;
//   allign: center;
//   flexFlow: row nowrap,
//   justifySelf: center,
//   alignSelf: center
// `
