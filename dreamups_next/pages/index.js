import MainText from '../components/MainText'
import LearnButton from '../components/LearnButton'
import MainImg from '../components/MainImg'
import MainLayout from '../layouts/MainLayout'
import Collabsible from '../components/collapsible.js/dropdowns.js'
import Example from '../components/carousel.js'
import MentorExpert from '../components/Experts.js'
import EventsCarousel from '../components/EventsCarousel'
import { Container } from '@nextui-org/react'
import { getHomePageMentors } from '../services/mentors.service'
import { useState, useEffect } from 'react'
import Head from "next/head";

export default function Home() {

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
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
      </Head>
      <MainLayout>
      <MainText></MainText>

      <LearnButton></LearnButton>

      <MainImg></MainImg>
    </MainLayout>
      <Collabsible>

      </Collabsible>

      <Container>
        <EventsCarousel />
      </Container>

      {/* <Example>

      </Example> */}


      {
        mentors?.length > 0 && <MentorExpert mentors={mentors} />
      }



    </>

  )
}
