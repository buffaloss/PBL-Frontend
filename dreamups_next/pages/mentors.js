import MainLayout from '../layouts/MainLayout'
import MentorsFirstPage from '../components/MentorsFirstPage'
import MentorExplanation from '../components/MentorExplanation'
import Topics from '../components/Topics'
import SearchBar from '../components/SearchBar'
import MentorCard from '../components/MentorCard'
import Hashtag from '../components/Hashtag'
import LoadMoreButton from '../components/LoadMoreButton'

export default function Mentors() {
  return (
    <MainLayout>

      <MentorsFirstPage />
      <MentorExplanation />
      <Topics/>
      <SearchBar/>
      <Hashtag/>
      <MentorCard/>
      <LoadMoreButton/>
      

    </MainLayout>

  )
}