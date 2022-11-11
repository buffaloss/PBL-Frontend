import { Main, MainHeading, WelcomeText, MentorImg } from "./styles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MentorsFirstPage = () => {
  return (

    <>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0}}>
        <Row style={{ marginLeft: 0, marginRight: 0 }}>
          <Col style={{ paddingLeft: 0, paddingRight: 0,marginLeft: 0, marginRight: 0}} >
            <Main>
              <MainHeading>
                World class experts<br />
                and mentors
              </MainHeading>
              <WelcomeText>
                Find qualified advice and connect with<br />
                experts and mentors in any business field<br />
              </WelcomeText>
            </Main>
          </Col>
          <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0}}>
            <MentorImg>
              <img src="/mentorship.png" width="700" height="350" alt="Mentors Image" />
            </MentorImg>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default MentorsFirstPage;