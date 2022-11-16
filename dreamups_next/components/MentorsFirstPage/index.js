import { Main, MainHeading, WelcomeText, MentorImg } from "./styles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head';
const MentorsFirstPage = () => {
  return (

    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
        <Row style={{ marginLeft: 0, marginRight: 0 }}>
          <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
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
          <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
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