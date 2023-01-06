import Link from 'next/link';
import Head from 'next/head';
import { Container, Col, Row } from 'react-bootstrap';
import { BtnWrapper, MainButton, BtnText } from "./styles";

const LoadMoreButton = ({ content, showAllMentors }) => {
  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col xs lg='2' >
            <BtnWrapper>
              <MainButton to="Load more" onClick={showAllMentors}>
                <BtnText>
                  {content}
                </BtnText>
              </MainButton>
            </BtnWrapper>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default LoadMoreButton;