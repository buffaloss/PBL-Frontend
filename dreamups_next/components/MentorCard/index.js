/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import { CardWrapper, MentorImg, MentorName, MentorFunction, MentorCompany, MentorText, MainButton, BtnWrapper, BtnText } from './styles';
import { useSession } from "next-auth/react";
import LoginModal from '../LoginModal';

const splitText = (text) => {
  const words = text.split(" ");
  let digest = "";
  let i = 0;
  while (digest.length < 100) {
    digest += words[i] + " ";
    i++;
  }
  return digest.trimEnd() + "...";
}

const MentorCard = ({ mentors }) => {
  const { status } = useSession();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <Container>
        <Row>

          {
            mentors?.map((mentor, index) => {
              return (
                <CardWrapper key={index}>
                  <MentorImg>
                    <img
                      src={"mentors/" + mentor?._id + ".jfif"}
                      onError={(e) => { e.target.src = "/mentor_icon.svg" }}
                      width="100%" height="100%" alt=""
                    />
                  </MentorImg>
                  <MentorName>
                    {mentor?.firstName}  {mentor?.lastName}
                  </MentorName>
                  <MentorFunction>
                    {mentor?.job}
                  </MentorFunction>
                  <MentorCompany>
                    {mentor?.company}
                  </MentorCompany>
                  <MentorText>
                    {splitText(mentor?.bio)}
                  </MentorText>
                  {
                    status === "authenticated" &&
                    <BtnWrapper>
                      <MainButton to="View more" onClick={() => { localStorage.setItem("mentorId", mentor._id) }}>
                        <Link href={{
                          pathname: "/mentor"
                        }}>
                          <BtnText>
                            View more
                          </BtnText>
                        </Link>
                      </MainButton>
                    </BtnWrapper>
                  }

                  {
                    status === "unauthenticated" &&
                    <LoginModal mentorId={mentor._id} />
                  }
                </CardWrapper>
              )
            })
          }



        </Row>
      </Container>
    </>

  );
}

export default MentorCard;