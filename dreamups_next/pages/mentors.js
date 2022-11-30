import MainLayout from '../layouts/MainLayout'
import MentorsFirstPage from '../components/MentorsFirstPage'
import MentorExplanation from '../components/MentorExplanation'
import Topics from '../components/Topics'
import SearchBar from '../components/SearchBar'
import MentorCard from '../components/MentorCard'
import Hashtag from '../components/Hashtag'
import LoadMoreButton from '../components/LoadMoreButton'
import {getAllMentors} from "../services/mentors.service";
import {useEffect} from "react";

export default function Mentors() {


    const getData = () => {
        getAllMentors().then((res) => {
            if(res?.data){
                console.log(res?.data)
            }
        })
    }


    useEffect(() => {
        getData();
    },[])

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
