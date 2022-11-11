import { Main, Text, CloseIcon, OptionsText } from "./styles"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hashtag = () => {
    return (
        <>
            <Container>
                <Row>

                    <Col xs={{ order: 'first' }}>
                        <Main>
                            <Text>
                                #marketing
                            </Text>
                        </Main>
                    </Col>

                    <Col xs={{ order: 'second' }}>
                        <Main>
                            <Text>
                                #growth
                            </Text>
                        </Main>
                    </Col>

                    <Col xs={{ order: 'third' }}>
                            <OptionsText>
                                View All
                            </OptionsText>
                    </Col>


                    <Col xs={{ order: 'last' }}>
                       
                            <OptionsText>
                                New
                            </OptionsText>
                       
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Hashtag;