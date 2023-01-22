import { Container, Col, Row } from 'react-bootstrap';
import { BtnWrapper, MainButton, BtnText } from "./styles";
import Link from 'next/link';

const LoadMoreButton = ({ content, showAllMentors, isRedirect }) => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs lg='2' >
            <BtnWrapper>
              <MainButton to="Load more" onClick={showAllMentors}>
                {isRedirect &&
                  <Link href={"/mentors"}>
                    <BtnText>
                      {content}
                    </BtnText>
                  </Link>
                }
                {!isRedirect &&
                  < BtnText >
                    {content}
                  </BtnText>
                }
              </MainButton>
            </BtnWrapper>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default LoadMoreButton;