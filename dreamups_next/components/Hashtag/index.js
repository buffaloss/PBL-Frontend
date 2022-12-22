import { Main, Text, CloseIcon, OptionsText } from "./styles"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import Head from 'next/head';
import { Searchtag } from "../SearchBar/styles";
import React from "react";

const Hashtag = ({ tags, onRemoveTag }) => {
    return (
        <>
            <Head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
                </style>
            </Head>
            <Container>
                <Row>

                    {/* <Col xs={{ order: 'first' }}>
                        <Main>
                            <Text>
                                #marketing
                            </Text>
                        </Main>
                    </Col> */}


                    {
                        tags?.map((tag, index) => {
                            return (
                                <Col key={index} xs={{ order: 'first' }}>
                                    <Main>
                                        <Text>
                                            {tag}
                                            <button
                                                onClick={() => onRemoveTag(tag)}
                                                className="nextui-c-ctQnhE nextui-c-ctQnhE-kEXoss-visible-true nextui-c-ctQnhE-jHlzRu-hasContentRight-true nextui-input-clear-button"
                                                type="button">
                                                <svg className="" height="24" viewBox="0 0 24 24" width="24">
                                                    <path
                                                        d="M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </button>
                                        </Text>
                                    </Main>
                                </Col>
                            )
                        })
                    }


                    {/* <Col xs={{ order: 'second' }}>
                        <Main>
                            <Text>
                                #growth
                            </Text>
                        </Main>
                    </Col> */}

               

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
