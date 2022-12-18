import { Main, TextContainer, MainHeading, Text } from "./styles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import Head from 'next/head';

const Topics = () => {
  return (

    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <Main>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
          <Row style={{ marginLeft: 0, marginRight: 0 }}>
            <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
              <TextContainer>
                <MainHeading>

                  Browse by Topics

                </MainHeading>
              </TextContainer>
            </Col>
          </Row>

          <Container>
            <Row>
              <Col xs={{ order: 'first' }}>
                <Link href="">
                  <Text>
                    Product Management
                  </Text>
                </Link>
              </Col>
              <Col xs={{ order: 'second' }}>
                <Link href="">
                  <Text>
                    Product Management
                  </Text>
                </Link>
              </Col>
              <Col xs={{ order: 'last' }}>
                <Link href="">
                  <Text>
                    Product Management
                  </Text>
                </Link>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col xs={{ order: 'first' }}>
                <Link href="">
                  <Text>
                    Customer Development
                  </Text>
                </Link>
              </Col>
              <Col xs={{ order: 'second' }}>
                <Link href="">
                  <Text>
                    Customer Development
                  </Text>
                </Link>
              </Col>
              <Col xs={{ order: 'last' }}>
                <Link href="">
                  <Text>
                    Customer Development
                  </Text>
                </Link>
              </Col>
            </Row>
          </Container>




          <Container>
            <Row>
              <Col xs={{ order: 'first' }}>
                <Link href="">
                  <Text>
                    Product Management
                  </Text>
                </Link>
              </Col>
              <Col xs={{ order: 'second' }}>
                <Link href="">
                  <Text>
                    Product Management
                  </Text>
                </Link>
              </Col>
              <Col xs={{ order: 'last' }}>
                <Link href="">
                  <Text>
                    Product Management
                  </Text>
                </Link>
              </Col>
            </Row>
          </Container>


          <Container>
            <Row>
              <Col xs={{ order: 'first' }}>
                <Link href="">
                  <Text>
                    Customer Development
                  </Text>
                </Link>
              </Col>
              <Col xs={{ order: 'second' }}>
                <Link href="">
                  <Text>
                    Customer Development
                  </Text>
                </Link>
              </Col>
              <Col xs={{ order: 'last' }}>
                <Link href="">
                  <Text>
                    Customer Development
                  </Text>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      </Main>
    </>
  )
}
export default Topics;