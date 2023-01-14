import MainLayout from '../layouts/MainLayout'
import MentorsFirstPage from '../components/MentorsFirstPage'
import MentorExplanation from '../components/MentorExplanation'
import Topics from '../components/Topics'
import SearchBar from '../components/SearchBar'
import MentorCard from '../components/MentorCard'
import Hashtag from '../components/Hashtag'
import LoadMoreButton from '../components/LoadMoreButton'
import { useEffect, useState } from "react";
import { searchMentors, getFixedNrMentors } from "../services/mentors.service"
import { Container, Row, Col } from "react-bootstrap"
import { MainButton, SearchWrapper, DefaultWrapper } from '../components/SearchBar/styles'
import { useSession } from "next-auth/react";

export default function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [tags, setTags] = useState([]);
  const [clicked, setClicked] = useState(true);
  const { status } = useSession();
  const [limitedMentorsData, setLimitedMentorsData] = useState([]);

  useEffect(() => {
    getMentorData();
    getLimitedMentorData();
  }, [])

  useEffect(() => {
    search();
  }, [tags]);

  const getMentorData = () => {
    if (status === 'authenticated') {
      searchMentors(tags).then((res) => {
        console.log("search data", res?.data);
        if (res?.data && res?.data?.length > 0) {
          setMentors(res?.data);
        }
      })
    }
  }

  const getLimitedMentorData = () => {
    getFixedNrMentors().then((res) => {
      if (res?.data && res?.data?.length > 0) {
        setLimitedMentorsData(res?.data);
      }
    });
  }

  const removeTag = (tag) => {
    const localTagsArray = tags?.filter(item => item !== tag);
    setTags([...localTagsArray]);
  }


  const search = () => {
    if (status === 'authenticated') {
      searchMentors(tags).then((res) => {
        setMentors(res?.data);
      })
    }
  }

  const sortByTime = () => {
    let batch = [...mentors];
    batch.sort((a, b) => new Date(b.timestampAdded) - new Date(a.timestampAdded));
    setMentors(batch);
  }

  return (
    <MainLayout>

      <MentorsFirstPage />
      <MentorExplanation />
      <Topics propsTags={tags} onTagsChange={(tags) => setTags(tags)} />

      {
        status === 'authenticated' &&
        <>
          <Container >
            <Row className="justify-content-md-center">
              <Col>
                <SearchWrapper >
                  <SearchBar propsTags={tags} onTagsChange={(tags) => setTags(tags)} />
                </SearchWrapper>
              </Col>
              <Col style={{ margin: "auto" }}>
                <MainButton onClick={sortByTime}>
                  Latest
                </MainButton>
              </Col>
            </Row>
          </Container>

          <Hashtag onRemoveTag={removeTag} tags={tags} />
          <MentorCard mentors={clicked ? mentors?.slice(0, 8) : mentors} />
          {mentors?.length >= 8 && <LoadMoreButton content={clicked ? "Load more" : "Show less"} showAllMentors={() => setClicked(!clicked)} />}

        </>
      }

      {
        status === 'unauthenticated' &&
        <>
          <DefaultWrapper >
            <SearchBar propsTags={tags} onTagsChange={(tags) => setTags(tags)} />
          </DefaultWrapper>
          <MentorCard mentors={limitedMentorsData} />
        </>
      }

    </MainLayout>
  )
}
