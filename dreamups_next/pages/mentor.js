import MainLayout from '../layouts/MainLayout'
import MentorIntro from '../components/MentorIntro'
import AskAQuestion from '../components/AskAQuestion'
import AskedQuestions from '../components/AskedQuestions'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getHomePageMentors } from '../services/mentors.service'
import { useState, useEffect } from 'react'

export default function Mentor() {

  const [mentors, setMentors] = useState([]);

  const getData = () => {

    getHomePageMentors().then((res) => {
      console.log("res data", res?.data);
      if (res?.data && res?.data?.length > 0) {
        setMentors(res?.data);
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <MainLayout>
      {
        mentors?.length > 0 && <MentorIntro mentors={mentors} />
      }
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
