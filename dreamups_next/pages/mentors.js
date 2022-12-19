import MainLayout from '../layouts/MainLayout'
import MentorsFirstPage from '../components/MentorsFirstPage'
import MentorExplanation from '../components/MentorExplanation'
import Topics from '../components/Topics'
import SearchBar from '../components/SearchBar'
import MentorCard from '../components/MentorCard'
import Hashtag from '../components/Hashtag'
import LoadMoreButton from '../components/LoadMoreButton'
import { getAllMentors } from "../services/mentors.service";
import { useEffect, useState } from "react";
import { searchMentors } from "../services/mentors.service";

export default function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // getAllMentorsData();
    getMentorData();
  }, [])

  useEffect(() => {
    search();
  }, [tags]);

  const getMentorData = () => {
    searchMentors(tags).then((res) => {
      console.log("search data", res?.data);
      if (res?.data && res?.data?.length > 0) {
        setMentors(res?.data);
      }
    })
    // getFixedNrMentors().then((res) => {
    //   console.log("res data", res?.data);
    //   if (res?.data && res?.data?.length > 0) {
    //     setMentors(res?.data);
    //   }
    // })
  }

  const getAllMentorsData = () => {
    getAllMentors().then((res) => {
      console.log("getAllMentorsData ", res?.data);
      if (res?.data) {
        console.log("getAllMentorsData ", res?.data);
      }
    })
  }

  const removeTag = (tag) => {
    const localTagsArray = tags?.filter(item => item !== tag);
    setTags(localTagsArray);
  }


  const search = () => {
    searchMentors(tags).then((res) => {
      console.log("search mentors ", res?.data)
      setMentors(res?.data);
    })
  }

  return (
    <MainLayout>

      <MentorsFirstPage />
      <MentorExplanation />
      <Topics />
      <SearchBar propsTags={tags} onTagsChange={(tags) => setTags(tags)} />
      <Hashtag onRemoveTag={(tag) => removeTag(tag)} tags={tags} />
      <MentorCard mentors={mentors} />

      <LoadMoreButton />


    </MainLayout>

  )
}
