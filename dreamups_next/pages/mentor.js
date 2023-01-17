import MainLayout from '../layouts/MainLayout'
import MentorIntro from '../components/MentorIntro'
import AskAQuestion from '../components/AskAQuestion'
import AskedQuestions from '../components/AskedQuestions'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getMentorById } from "../services/mentors.service";
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";

export default function Mentor() {
  const [mentorInfo, setMentorInfo] = useState();
  const [id, setId] = useState(typeof window !== 'undefined' ? localStorage.getItem("mentorId") : "");
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "http://localhost:3000/";
    }
  }, [status]);

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "http://localhost:3000/";
    }

    setId(localStorage.getItem("mentorId"));
    getMentorData();
  }, [id]);


  const getMentorData = () => {
    if (!id) return;
    getMentorById(id).then((res) => {
      console.log('dsf', res?.data);
      if (res?.data) {
        setMentorInfo(res?.data);
      }
    })
  }

  return (
    <>
      {
        status !== 'unauthenticated' &&
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
      }
    </>
  )
}
