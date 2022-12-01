import MainLayout from '../layouts/MainLayout'
import MentorsFirstPage from '../components/MentorsFirstPage'
import MentorExplanation from '../components/MentorExplanation'
import Topics from '../components/Topics'
import SearchBar from '../components/SearchBar'
import MentorCard from '../components/MentorCard'
import Hashtag from '../components/Hashtag'
import LoadMoreButton from '../components/LoadMoreButton'
import { getHomePageMentors } from '../services/mentors.service'
import { useState, useEffect } from 'react'

export default function Mentors() {

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
      <MainLayout>

        <MentorsFirstPage />
        <MentorExplanation />
        <Topics />
        <SearchBar />
        <Hashtag />
        {
        mentors?.length > 0 && <MentorCard mentors={mentors} />
      }
        <LoadMoreButton />


      </MainLayout>

      
    </>

  )
}