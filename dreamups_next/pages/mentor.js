import MainLayout from '../layouts/MainLayout'
import MentorIntro from '../components/MentorIntro'
import AskAQuestion from '../components/AskAQuestion'
import AskedQuestions from '../components/AskedQuestions'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from "next/router";
import { getMentorById } from "../services/mentors.service";
import { useEffect, useState } from 'react';

export default function Mentor() {
  const [mentorInfo, setMentorInfo] = useState();
  const router = useRouter();
  const query = router.query;
  const id = query.id;

  useEffect(() => {
    getMentorData();
  }, []);

  const getMentorData = () => {
    getMentorById(id).then((res) => {
      if (res?.data) {
        setMentorInfo(res?.data);
      }
    })
  }

  return (
    <MainLayout>
      <MentorIntro mentor={mentorInfo} />
      <Row>
        <Col xxl='6'>
          <AskAQuestion />
        </Col>
        <Col xxl='5'>
          <AskedQuestions />
        </Col>
      </Row>


    </MainLayout>

  )
}
