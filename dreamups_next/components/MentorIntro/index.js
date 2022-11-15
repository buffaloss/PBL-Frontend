import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { MentorImg,TextContainer,MentorLocation, MentorName, MentorFunction, MentorCompany, MentorText, ExpertiseContainer, DomainExpertiseText } from './styles';


const MentorIntro = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <MentorImg>
                        <img src="/mentor_icon.svg" width="300" height="400" alt="Mentor Image" />
                    </MentorImg>
                </Col>
                <Col>
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
                        <img src ="/location.svg" width="20" height="70" alt="location icon"></img>
                    </Col>
                    <Col>
                    <MentorLocation>
                        San Francisco, United States
                    </MentorLocation>
                    </Col>
                    </Row>
                </TextContainer>
                </Col>
                <Col>
                   
                </Col>
                <Col>
                   
                   </Col>
            </Row>
        </Container>
    );
}

export default MentorIntro;