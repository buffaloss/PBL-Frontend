import MainLayout from '../layouts/MainLayout'
import MentorsFirstPage from '../components/MentorsFirstPage'
import MentorExplanation from '../components/MentorExplanation'
import Topics from '../components/Topics'
import SearchBar from '../components/SearchBar'
import MentorCard from '../components/MentorCard'
import Hashtag from '../components/Hashtag'
import LoadMoreButton from '../components/LoadMoreButton'
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
    <MainLayout>

      <MentorsFirstPage />
      <MentorExplanation />
      <Topics/>
      <SearchBar propsTags={tags} onTagsChange={(tags) => setTags(tags)}/>
      <Hashtag onRemoveTag={(tag) => removeTag(tag)} tags={tags}/>
      <MentorCard/>
      <LoadMoreButton/>


    </MainLayout>

  )
}
