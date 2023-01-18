import { Main, TextContainer, MainHeading, Text1, Text2, Text3, Text4, Number, Arrow } from "./styles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head';

const MentorExplanation = () => {
    return (

        <>
            <Head>
                
            </Head>
            <Main>
                <Container fluid style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
                    <Row style={{ marginLeft: 0, marginRight: 0 }}>
                        <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                            <TextContainer>
                                <Text1>
                                    Over <br />
                                </Text1>
                                <MainHeading>
                                    300+ <br />
                                </MainHeading>
                                <Text2>
                                    Experts and mentors
                                </Text2>
                            </TextContainer>
                        </Col>
                        <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
                            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                                <Text3>
                                    How it works
                                </Text3>
                            </Row>
                            <Row style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                                    <Number>
                                        <img src="/one.svg" width="160" height="160" alt="No.1 Image" />
                                    </Number>
                                </Col>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                                    <Arrow>
                                        <img src="/arrow.png" width="100" height="30" alt="Arrow Image" />
                                    </Arrow>
                                </Col>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                                    <Number>
                                        <img src="/two.svg" width="160" height="160" alt="No.2 Image" />
                                    </Number>
                                </Col>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                                    <Arrow>
                                        <img src="/arrow.png" width="100" height="30" alt="Arrow Image" />
                                    </Arrow>
                                </Col>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                                    <Number>
                                        <img src="/three.svg" width="160" height="160" alt="No.3 Image" />
                                    </Number>
                                </Col>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >

                                </Col>

                            </Row>
                            <Row style={{ marginLeft: 0, marginRight: 0 }}>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                                    <Text4>
                                        Search for the <br />
                                        right mentor <br />
                                    </Text4>
                                </Col>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                                    <Text4>
                                        Read existing <br />
                                        answers <br />
                                    </Text4>
                                </Col>
                                <Col style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }} >
                                    <Text4>
                                        Ask a new question <br />
                                        or book a call <br />
                                    </Text4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Main>
        </>
    )
}
export default MentorExplanation;