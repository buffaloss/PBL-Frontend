import styled from 'styled-components';

export const FooterMain = styled.nav`
  padding-top: 50px;
  top: 0;
  display: flex;
  justify-content: left; //put the content(our container of Navrbar to the left)
  align-items:center;
  font-size: 1rem;
  top: 0;
  z-index: 9999;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding: 0 70px;
  background-color: #F5F5F5;
  border-top: 1px solid #D3D3D3;
`

export const TextContainer = styled.div`
 width: 50%;
 height:100%;
 position: relative;

`

export const TextInfo = styled.div`
 left:20px;
 font-family: 'Open Sans';
 font-size:16px;
 color:black;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
`

export const ContactInfoContainer = styled.div`
width: 50%;
height: 100%;
position: relative;
display: flex;
align-items: right;
`

export const FacebookContact = styled.div`
 top: 50%;
 transform: translateY(-50%);
 position: absolute;
 align-content: right;
`

export const LinkedinContact = styled.div`
 top: 50%;
 transform: translateY(-50%);
 position: absolute;

`
export const InstagramContact = styled.div`
 top: 50%;
 transform: translateY(-50%);
 position: absolute;

`