import { Main, Text, CloseIcon, OptionsText } from "./styles"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import Head from 'next/head';

const Hashtag = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet" />
            </Head>
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
                        <Link href="">
                            <OptionsText>
                                View All
                            </OptionsText>
                        </Link>
                    </Col>


                    <Col xs={{ order: 'last' }}>
                        <Link href="">
                            <OptionsText>
                                New
                            </OptionsText>
                        </Link>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Hashtag;