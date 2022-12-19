import MainLayout from '../layouts/MainLayout'
import MentorsFirstPage from '../components/MentorsFirstPage'
import MentorExplanation from '../components/MentorExplanation'
import Topics from '../components/Topics'
import SearchBar from '../components/SearchBar'
import MentorCard from '../components/MentorCard'
import Hashtag from '../components/Hashtag'
import LoadMoreButton from '../components/LoadMoreButton'
<<<<<<< HEAD
import {getAllMentors} from "../services/mentors.service";
import {useEffect, useState} from "react";

export default function Mentors() {

    const [tags, setTags] = useState([]);

    const getData = () => {
        getAllMentors().then((res) => {
            if(res?.data){
                console.log(res?.data)
            }
        })
    }


    useEffect(() => {
        getData();
    },[]);

    const removeTag = (tag) => {
        const localTagsArray = tags?.filter(item => item !== tag);
        setTags(localTagsArray);

    }


    return (
=======
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
>>>>>>> 7d2209d36d3ea04d7a1e10acc14637c1f5a191b0
    <MainLayout>

      <MentorsFirstPage />
      <MentorExplanation />
<<<<<<< HEAD
      <Topics/>
      <SearchBar propsTags={tags} onTagsChange={(tags) => setTags(tags)}/>
      <Hashtag onRemoveTag={(tag) => removeTag(tag)} tags={tags}/>
      <MentorCard/>
      <LoadMoreButton/>
=======
      <Topics />
      <SearchBar propsTags={tags} onTagsChange={(tags) => setTags(tags)} />
      <Hashtag onRemoveTag={(tag) => removeTag(tag)} tags={tags} />
      <MentorCard mentors={mentors} />

      <LoadMoreButton />
>>>>>>> 7d2209d36d3ea04d7a1e10acc14637c1f5a191b0


    </MainLayout>

  )
}
