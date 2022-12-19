import Link from 'next/link';
import Head from 'next/head';
import { Container, Col, Row } from 'react-bootstrap';
import { BtnWrapper, MainButton, BtnText } from "./styles";

const LoadMoreButton = () => {
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
              <MainButton to="Load more" >
                <Link href="/mentors">
                  <BtnText>
                    Load more
                  </BtnText>
                </Link>
              </MainButton>
            </BtnWrapper>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default LoadMoreButton;