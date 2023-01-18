import MainLayout from '../layouts/MainLayout'
import Collabsible from '../components/collapsible/dropdowns.js/index.js'
import MentorExpert from '../components/Experts'
import EventsCarousel from '../components/EventsCarousel'
import { Container } from '@nextui-org/react'
import { getFixedNrMentors } from '../services/mentors.service'
import { useState, useEffect } from 'react'
import Head from "next/head";
import HeaderImg from '../components/HeaderImg'

export default function Home() {

  const [mentors, setMentors] = useState([]);

  const getData = () => {

    getFixedNrMentors().then((res) => {
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
      
      <MainLayout>
        <HeaderImg />
        <Collabsible />
        <Container>
          <EventsCarousel />
        </Container>
        {
          mentors?.length > 0 && <MentorExpert mentors={mentors} />
        }
      </MainLayout>
    </>
  )
}
