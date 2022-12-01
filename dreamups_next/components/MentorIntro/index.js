import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { MainContainer, MentorImg, TextContainer, MentorLocation, LocationIcon, MentorName, MentorFunction, MentorCompany, MentorText, ExpertiseContainer, DomainExpertiseText, MentorTag, TagName, MentorSocial } from './styles';


const MentorIntro = ({mentors}) => {
    console.log(mentors)
    return (

        <>
        {
            mentors?.map((mentor, index) => {
              return (
                <MainContainer key ={index}>
                <Col xxl='3'>
                    <MentorImg>
                        <img src="/mentor_icon.svg" width="500" alt="Mentor Image" />
                    </MentorImg>
                </Col>
                <Col xxl='3'>
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
                            <Col >
                                <MentorLocation>
                                    San Francisco, United States
                                </MentorLocation>
                            </Col>
                        </Row>
                    </TextContainer>
                </Col>
                <Col xxl='6'>
                    <ExpertiseContainer>
                        <Row>
                            <DomainExpertiseText>
                                Main Domain Expertise
                            </DomainExpertiseText>
                        </Row>
                        <div class="row no gutters">
                            <Row >
                                <Col xxl='4' >
                                    <MentorTag><TagName>startups</TagName></MentorTag>
                                </Col>
                                <Col xxl='4' >
                                    <MentorTag><TagName>legal</TagName></MentorTag>
                                </Col>
                                <Col xxl='4' >
                                    <MentorTag><TagName>business</TagName></MentorTag>
                                </Col>
                            </Row>

                        </div>

                        <Row >
                            <Col xxl='4' >
                                <MentorTag><TagName>marketing</TagName></MentorTag>
                            </Col>
                            <Col xxl='8' >
                                <MentorTag><TagName>product management</TagName></MentorTag>
                            </Col>
                        </Row>
                    </ExpertiseContainer>
                </Col>

                <Col>

                </Col>

                <MentorSocial>
                    <Link href='https://www.linkedin.com/'>
                        <img src="linkedin_icon.svg" width="55" height="55" alt="linked in icon"></img>
                    </Link>
                </MentorSocial>
            </MainContainer>
              )
          })
          }

           
        </>




    );
}

export default MentorIntro;