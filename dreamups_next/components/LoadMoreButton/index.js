import Link from 'next/link';
import Head from 'next/head';
import { Container, Col, Row } from 'react-bootstrap';
import { BtnWrapper, MainButton, BtnText } from "./styles";

const LoadMoreButton = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
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