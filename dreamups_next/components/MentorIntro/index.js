/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { MainContainer, MentorImg, TextContainer, MentorLocation, LocationIcon, MentorName, MentorFunction, MentorCompany, MentorText, ExpertiseContainer, DomainExpertiseText, MentorTag, TagName, MentorSocial } from './styles';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSession } from "next-auth/react";

const MentorIntro = ({ mentor }) => {
  // useEffect(() => {
  //   if (!mentor) {
  //     window.location.href = "http://localhost:3000/";
  //     return;
  //   }
  // }, [mentor])
  const { status } = useSession();

  useEffect(() => {
    console.log("current status ", status);
  }, [])

  return (
    <>
      <MainContainer>
        <Container>
          <Row>
            <Col xs='3'>
              <MentorImg>
                <img
                  src={"mentors/" + mentor?._id + ".jfif"}
                  onError={(e) => { e.target.src = "/mentor_icon.svg"; }}
                  width="100%" height="100%" alt=""></img>
              </MentorImg>
            </Col>
            <Col xs='3'>
              <TextContainer>
                <MentorName>
                  {mentor?.firstName}  {mentor?.lastName}
                </MentorName>
                <MentorFunction>
                  {mentor?.job}
                </MentorFunction>
                <MentorCompany>
                  {mentor?.company}
                </MentorCompany>
                <MentorText>
                  {mentor?.bio}
                </MentorText>
                <Row>
                  <Col xxl='2'>
                    <LocationIcon>
                      <img src="/location.svg" width="20" height="70" alt="location icon"></img>
                    </LocationIcon>
                  </Col>
                  <Col>
                    <MentorLocation>
                      San Francisco, United States
                    </MentorLocation>
                  </Col>
                </Row>
              </TextContainer>
            </Col>
            <Col xs='3'>
            </Col>
            <Col xs='2'>
              <ExpertiseContainer>
                <Row>
                  <DomainExpertiseText>
                    Main Domain Expertise
                  </DomainExpertiseText>
                </Row>
                <div className="row no gutters">
                  <Row>
                    <Col xxl='4'>
                      <MentorTag><TagName>startups</TagName></MentorTag>
                    </Col>
                    <Col xxl='4'>
                      <MentorTag><TagName>legal</TagName></MentorTag>
                    </Col>
                    <Col xxl='4'>
                      <MentorTag><TagName>business</TagName></MentorTag>
                    </Col>
                  </Row>
                </div>

                <Row>
                  <Col xxl='4'>
                    <MentorTag><TagName>marketing</TagName></MentorTag>
                  </Col>
                  <Col xxl='8'>
                    <MentorTag><TagName>product management</TagName></MentorTag>
                  </Col>
                </Row>
              </ExpertiseContainer>
            </Col>
          </Row>
        </Container>
      </MainContainer>

      <MentorSocial>
        <Link href="https://www.linkedin.com/">
          <img src="linkedin_icon.svg" width="50" height="50" alt="linked in profile"></img>
        </Link>
      </MentorSocial>
    </>
  )
}

export default MentorIntro;