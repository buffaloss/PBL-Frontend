import Head from 'next/head';
import { Container, Col, Row } from 'react-bootstrap';
import { BtnWrapper, MainButton, BtnText } from "./styles";

const LoadMoreButton = ({ content, showAllMentors }) => {
  return (
    <>
      <Head>
         
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