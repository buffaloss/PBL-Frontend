import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { CardWrapper, MentorImg, MentorName, MentorFunction, MentorCompany, MentorText, MainButton, BtnWrapper, BtnText } from './styles';

const MentorCard = () => {
  return (
    
    <Container>
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
    

  );
}

export default MentorCard;