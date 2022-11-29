import MainText from '../components/MainText'
import LearnButton from '../components/LearnButton'
import MainImg from '../components/MainImg'
import MainLayout from '../layouts/MainLayout'
import Collabsible from '../components/collapsible.js/dropdowns.js'
import Example from '../components/carousel.js'
import MentorExpert from '../components/Experts.js'
import EventsCarousel from '../components/EventsCarousel'
import {Container} from '@nextui-org/react'
import {getHomePageMentors} from '../services/mentors.service'
import {useState, useEffect} from 'react'

export default function Home() {

    const [mentors, setMentors] = useState([]);

    const getData = () => {

        getHomePageMentors().then((res) => {
            console.log(res)
            if (res?.data && res?.data?.length > 0) {
                setMentors(res?.data);
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

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


            {
                mentors?.length > 0 && <MentorExpert mentors={mentors}/>
            }


        </>

    )
}
