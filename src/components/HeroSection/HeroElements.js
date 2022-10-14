import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
</style>

export const HeroContainer = styled.div`
background: #fff;
display: flex;
flex-direction: column;
max-width: 800px;
height:800px;
padding: 0 30 px;
position: relative;
z-index: 1;
`;

export const HeroContent = styled.div`
 z-index: 3;
 height: 400px;
 max-width: 600px;
 position: relative;
 display: flex;
 flex-direction: column;
 padding: 8 24 px;
`;

export const HeroH1 = styled.h1`
 font-family: 'Poppins',sans-serif;
 color: #000;
 height: 600px;
 font-size: 40px;
 align-items: center;

 @media screen and (max-width: 768px){
    font-size: 40px;
 }

 @media screen and (max-width: 480px){
    font-size: 32px;
 }
`;

export const HeroP = styled.p`
 font-family: 'Poppins',sans-serif;
 margin-top: 5 px;
 color: #000;
 font-size: 24px;
 max-width: 800px;
 padding-right: 10px;


 @media screen and (max-width: 768px){
    font-size: 24px;
 }

 @media screen and (max-width: 480px){
    font-size: 18px;
 }
`;

export const HeroBtnWrapper = styled.div`
 margin-top: 5px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 10px;
`;

export const ArrowForward = styled(MdArrowForward)`
 margin-left: 8px;
 font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
 margin-left: 8px;
 font-size: 20px;
`

export const HeroImg = styled.p`
 align-items: right;
 height: 600px;
 width: 600px;
 position: relative;
 z-index: 25;
`