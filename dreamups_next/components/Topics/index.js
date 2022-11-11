import { Main, TextContainer, MainHeading, Text } from "./styles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Topics = () => {
    return (

        <>
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
                            <Col xs={{ order: 'first' }}><Text>Product Management</Text></Col>
                            <Col xs={{ order: 'second' }}><Text>Product Management</Text></Col>
                            <Col xs={{ order: 'last' }}><Text>Product Management </Text></Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col xs={{ order: 'first' }}><Text>Customer Development</Text></Col>
                            <Col xs={{ order: 'second' }}><Text>Customer Development</Text></Col>
                            <Col xs={{ order: 'last' }}><Text>Customer Development</Text></Col>
                        </Row>
                    </Container>


                    <Container>
                        <Row>
                            <Col xs={{ order: 'first' }}><Text>Product Management</Text></Col>
                            <Col xs={{ order: 'second' }}><Text>Product Management</Text></Col>
                            <Col xs={{ order: 'last' }}><Text>Product Management </Text></Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col xs={{ order: 'first' }}><Text>Customer Development</Text></Col>
                            <Col xs={{ order: 'second' }}><Text>Customer Development</Text></Col>
                            <Col xs={{ order: 'last' }}><Text>Customer Development</Text></Col>
                        </Row>
                    </Container>



                </Container>

            </Main>
        </>
    )
}
export default Topics;