import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head';
import { CardWrapper, MentorImg, MentorName, MentorFunction, MentorCompany, MentorText, MainButton, BtnWrapper, BtnText } from './styles';

const MentorCard = ({mentors}) => {
  console.log(mentors)
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
                    <img src="/mentor_icon.svg" width="100%" height="100%" alt="Mentor Image" />
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
                    {mentor?.bio}
                  </MentorText>
                  <BtnWrapper>
                    <MainButton to="View more" >
                      <Link href="/mentor">
                        <BtnText>
                          View more
                        </BtnText>
                      </Link>
                    </MainButton>
                  </BtnWrapper>
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