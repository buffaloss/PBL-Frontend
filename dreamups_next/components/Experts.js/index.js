import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head';
import { CardWrapper, MentorImg, MentorName, MentorFunction, MentorCompany, MentorText, MainButton, BtnWrapper, BtnText } from './styles';

const MentorExpert = () => {
    return (
        <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
          </Head>
        <Container>
            <h2>Experts and mentors</h2>
            <h5>Connect with world class experts and mentors</h5>
          <Row>
          <CardWrapper>
            <MentorImg>
              <img src="/mentor_icon.svg" width="100%" height="100%" alt="Mentor Image" />
            </MentorImg>
            <MentorName>
              Yan Budman
            </MentorName>
            <MentorFunction>
              Marketing manager
            </MentorFunction>
            <MentorCompany>
              Indigogo
            </MentorCompany>
            <MentorText>
              Over 10 years of experience with crowdfunding platforms. Yan can help you list your startups on global platforms.
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

          <CardWrapper>
            <MentorImg>
              <img src="/mentor_icon.svg" width="100%" height="100%" alt="Mentor Image" />
            </MentorImg>
            <MentorName>
              Yan Budman
            </MentorName>
            <MentorFunction>
              Marketing manager
            </MentorFunction>
            <MentorCompany>
              Indigogo
            </MentorCompany>
            <MentorText>
              Over 10 years of experience with crowdfunding platforms. Yan can help you list your startups on global platforms.
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

          <CardWrapper>
            <MentorImg>
              <img src="/mentor_icon.svg" width="100%" height="100%" alt="Mentor Image" />
            </MentorImg>
            <MentorName>
              Yan Budman
            </MentorName>
            <MentorFunction>
              Marketing manager
            </MentorFunction>
            <MentorCompany>
              Indigogo
            </MentorCompany>
            <MentorText>
              Over 10 years of experience with crowdfunding platforms. Yan can help you list your startups on global platforms.
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

          <CardWrapper>
            <MentorImg>
              <img src="/mentor_icon.svg" width="100%" height="100%" alt="Mentor Image" />
            </MentorImg>
            <MentorName>
              Yan Budman
            </MentorName>
            <MentorFunction>
              Marketing manager
            </MentorFunction>
            <MentorCompany>
              Indigogo
            </MentorCompany>
            <MentorText>
              Over 10 years of experience with crowdfunding platforms. Yan can help you list your startups on global platforms.
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
            </Row>
        </Container>
        </>


    );
}

export default MentorExpert;