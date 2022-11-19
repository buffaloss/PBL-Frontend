import MainText from '../components/MainText'
import LearnButton from '../components/LearnButton'
import MainImg from '../components/MainImg'
import MainLayout from '../layouts/MainLayout'
import Collabsible from '../components/collapsible.js/dropdowns.js'
import Example from '../components/carousel.js'
import MentorExpert from '../components/Experts.js'
import EventsCarousel from '../components/EventsCarousel'
import { Container } from '@nextui-org/react'

export default function Home() {
  return (
    <><MainLayout>
      <MainText></MainText>

      <LearnButton></LearnButton>

      <MainImg></MainImg>
    </MainLayout>
      <Collabsible>

      </Collabsible>

      <Container>
      <EventsCarousel/>
      </Container>

      {/* <Example>

      </Example> */}


      <MentorExpert>

      </MentorExpert>


    </>

  )
}
