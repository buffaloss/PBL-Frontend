import MainText from '../components/MainText'
import LearnButton from '../components/LearnButton'
import MainImg from '../components/MainImg'
import MainLayout from '../layouts/MainLayout'
import Collabsible from '../components/collapsible.js/dropdowns.js'
import Example from '../components/carousel.js'
import MentorExpert from '../components/Experts.js'

export default function Home() {
  return (
    <><MainLayout>
      <MainText></MainText>

      <LearnButton></LearnButton>

      <MainImg></MainImg>
    </MainLayout>
      <Collabsible>

      </Collabsible>

      <Example>
        
      </Example>
      
      
      <MentorExpert>

      </MentorExpert>
    
    
    </>

  )
}
