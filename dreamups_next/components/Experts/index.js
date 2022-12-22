/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head';
import LoginModal from '../LoginModal';
import { CardWrapper, MentorImg, MentorName, MentorFunction, MentorCompany, MentorText, MainButton, BtnWrapper, BtnText } from './styles';
import { useSession } from "next-auth/react"
import { useState } from 'react';


const MentorExpert = ({ mentors }) => {
  const { status } = useSession()
  const [visible, setVisible] = useState(false);

  console.log("current status");

  const splitText = (text) => {
    const words = text.split(" ");
    let digest = "";
    let i = 0;
    const max = 100;
    while (digest.length < max) {
      digest += words[i] + " ";
      i++;
    }
    return digest.trimEnd() + "...";
  }

  return (
    <div style={{ marginTop: 150 }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <Container>
        <h2>Experts and mentors</h2>
        <h5>Connect with world class experts and mentors</h5>
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
                      <MainButton to="View more" >
                        <Link href={{
                          pathname: "/mentor",
                          query: {
                            id: mentor._id,
                          }
                        }}>
                          <BtnText>
                            View more
                          </BtnText>
                        </Link>
                      </MainButton>
                    </BtnWrapper>
                  }

                  {
                    status !== "authenticated" &&
                    <LoginModal mentorId={mentor._id} />
                  }
                </CardWrapper>
              )
            })
          }



        </Row>
      </Container>
    </div>
  );
}

export default MentorExpert;