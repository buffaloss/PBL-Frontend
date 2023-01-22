import {
  MainContainer,
  MainImg,
  MainHeading,
  SecondContainer,
  Heading,
  TextInfo,
  IconImg,
  ThirdContainer,
  Info,
  TextInfo2,
  FourthContainer
} from "./styles";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutIntro = () => {
  return (

    <>
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
          <Col xs={1}></Col>
        </Row>
      </MainContainer>
      <SecondContainer>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Heading>
              Our <br />
              Goal
            </Heading>
          </Col>
          <Col xs={7}>
            <TextInfo>
              Dreamups&apos; goal is to work on capacity building to increase the number of companies, especially tech startups, by developing programs and authentic content with practical knowledge from the best experts, and also to increase and develop the absorption of venture capital invested into technological startups from Moldova.
            </TextInfo>
          </Col>
          <Col xs={2}>
          </Col>
        </Row>
      </SecondContainer>
      <ThirdContainer>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <IconImg>
              <img src="/event_img.jpg" width="550px" height="350px" alt="Dreamups" />
            </IconImg>
          </Col>
          <Col>
            <Info>
              The necessity of the projects developed and organized by Dreamups comes from the undeveloped startup ecosystem and poor business culture in Moldova, as well as the lack of entrepreneurial spirit and drive among the local youth. The success of previous experience and a large number of youth who benefited from Dreamups activities, emphasizes the need of sharing quality experiences with entrepreneurs who come from developed entrepreneurial ecosystems and have a global business experience as well as local entrepreneurs that can bring more credibility, having the same cultural and educational background. We strive to create a fair and competitive business environment in Moldova and in the region.
            </Info>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </ThirdContainer>

      <FourthContainer>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Heading>
              Innovation is key to everything we do at Dreamups
            </Heading>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <TextInfo2>
              Since 2018 we have developed our own e-learning and acceleration platform, which helps us connect experts from all over the world with founders and youth interested in starting a business from Moldova, as well as from the region, mainly from Europe.
              We develop on a yearly basis a series of programs: accelerators, pre-accelerators, hackathons, Demo Days, localized masterclasses, networking, inspirational events and fundraising for startups.
            </TextInfo2>
          </Col>
          <Col xs={2}>
          </Col>
        </Row>
      </FourthContainer>

    </>
  )
}
export default AboutIntro;