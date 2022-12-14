import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from 'next/head';
import { Main, Text } from "./styles"

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

          {
            tags?.map((tag, index) => {
              return (
                <Col key={index} xs={{ order: 'first' }}>
                  <Main>
                    <Text>
                      {tag}
                      <button
                        onClick={() => onRemoveTag(tag)}
                        type="button"
                        style={{ border: "none", background: "none", paddingLeft: "5px", paddingRight: "none" }}
                      >
                        <img src="cross_button.svg"></img>
                      </button>
                    </Text>
                  </Main>
                </Col>
              )
            })
          }

        </Row>
      </Container>
    </>
  )
}

export default Hashtag;
