import MainLayout from '../layouts/MainLayout'
import MentorIntro from '../components/MentorIntro'
import AskAQuestion from '../components/AskAQuestion'
import AskedQuestions from '../components/AskedQuestions'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Mentor() {
  return (
    <MainLayout>
      <MentorIntro />
        <Row>
          <Col xxl='6'>
            <AskAQuestion />
          </Col>
          <Col xxl='5'>
            <AskedQuestions/>
          </Col>
        </Row>
      

    </MainLayout>

  )
}
