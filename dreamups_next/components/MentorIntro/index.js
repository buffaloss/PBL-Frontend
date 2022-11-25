import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { MentorImg, TextContainer, MentorLocation, MentorName, MentorFunction, MentorCompany, MentorText, ExpertiseContainer, DomainExpertiseText, MentorTag, TagName, MentorSocial} from './styles';


const MentorIntro = () => {
    return (
        <>
            <div className="row">
                <Col xxl='3'>
                    <MentorImg>
                        <img src="/mentor_icon.svg" width="500" height="500" alt="Mentor Image" />
                    </MentorImg>
                </Col>
                <Col xxl='3'>
                    <TextContainer>
                        <MentorName>
                            Yan Budman
                        </MentorName>
                        <MentorFunction>
                            Marketing manager
                        </MentorFunction>
                        <MentorCompany>
                            Indigogo
                        </MentorCompany>
                        <MentorText>
                            Over 10 years of experience with crowdfunding platforms. Yan can help you list your startups on global platforms.
                        </MentorText>
                        <Row>
                            <Col>
                                <img src="/location.svg" width="20" height="70" alt="location icon"></img>
                            </Col>
                            <Col>
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
                        <Row>
                            <Col>
                                <MentorTag><TagName>startups</TagName></MentorTag>
                            </Col>
                        
                        </Row>
                    </ExpertiseContainer>
                </Col>
                <Col>

                </Col>
            </div>

            <MentorSocial>
                <Link href='https://www.linkedin.com/'>
                    <img src="linkedin_icon.svg" width="55" height="55" alt="linked in icon"></img>
                </Link>
            </MentorSocial>

    
        </>
    );
}

export default MentorIntro;