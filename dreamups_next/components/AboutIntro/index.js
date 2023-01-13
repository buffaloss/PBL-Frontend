import { MainContainer,
    MainImg,
    MainHeading,
    SecondContainer,
    Heading,
    TextInfo,
    IconImg,
    ThirdContainer,
    Info} from "./styles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head';
const AboutIntro = () => {
  return (

    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
      </Head>
      <MainContainer>
        <Row>
            <Col xs={1}></Col>
        <Col xs={3}>
        <MainImg>
        <img src="/dreamups_logo_img.png" width="400" height="360" alt="Dreamups" />
        </MainImg>
        </Col>
        <Col>
         <MainHeading>
            Dreamups - developing startups and creating a favorable environmnet for young entrepreneurs to challenge themselves.
         </MainHeading>
        </Col>
        <Col xs ={1}></Col>
        </Row>
      </MainContainer>
      <SecondContainer>
        <Row>
            <Col xs = {3}></Col>
            <Col>
        <Heading>
            Our <br/>
            Goal
        </Heading>
        </Col>
        <Col xs={6}>
        <TextInfo>
        Dreamups’ goal is to work on capacity building to increase the number of companies, especially tech startups, by developing programs and authentic content with practical knowledge from the best experts, and also to increase and develop the absorption of venture capital invested into technological startups from Moldova. 
        </TextInfo>
        </Col>
        <Col xs ={2}>
        </Col>
        </Row>
      </SecondContainer>
    </>
  )
}
export default AboutIntro;