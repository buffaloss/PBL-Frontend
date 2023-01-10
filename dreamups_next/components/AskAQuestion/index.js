import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AskContainer, AskTitle, AskText, FNameWrapper, LNameWrapper, EmailWrapper, MsgWrapper, CheckboxWrapper, MainButton, BtnWrapper } from "./styles";
import { Input, Textarea, Text, Checkbox } from "@nextui-org/react";
import Head from "next/head";
import { sendUserQuestion } from "../../services/mail.service";
import { useState } from "react";

const AskAQuestion = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const getQuestionInfo = () => {
    const questionData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      msg: msg
    };
    console.log(questionData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMsg("");

    sendUserQuestion(questionData);
  }

  return (
    <>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
        </style>
      </Head>
      <AskContainer>
        <AskTitle>
          Ask a question
        </AskTitle>
        <AskText>
          Ask a question or send a message. If your choose, your question can be answered publicly for other founders to see it.
        </AskText>
        <Row style={{ width: '100%' }}>
          <Col>
            <FNameWrapper>
              <Input
                type="text"
                clearable
                bordered
                fullWidth
                color="#ED1E79"
                size="lg"
                placeholder="First name"
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
              />
            </FNameWrapper>
          </Col>
          <Col>
            <LNameWrapper>
              <Input
                clearable
                bordered
                fullWidth
                color="#ED1E79"
                size="lg"
                placeholder="Last name"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
              />
            </LNameWrapper>
          </Col>

        </Row>
        <Row style={{ width: '100%' }}>
          <EmailWrapper>
            <Input
              clearable
              bordered
              fullWidth
              color="#ED1E79"
              size="lg"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </EmailWrapper>
        </Row>
        <Row style={{ width: '100%' }}>
          <MsgWrapper>
            <Textarea
              clearable
              bordered
              fullWidth
              resize="none"
              color="#ED1E79"
              size="lg"
              placeholder="Message"
              onChange={e => setMsg(e.target.value)}
              value={msg}
            />
          </MsgWrapper>
        </Row>
        <Row style={{ width: '100%' }}>
          <CheckboxWrapper>
            <Checkbox>
              <Text size={18}>I agree to publish the question and answer</Text>
            </Checkbox>
          </CheckboxWrapper>
        </Row>
        <Row style={{ width: '100%' }}>
          <BtnWrapper>
            <MainButton to="Send" onClick={getQuestionInfo} >
              Send
            </MainButton>
          </BtnWrapper>
        </Row>
      </AskContainer>
    </>

  );

}

export default AskAQuestion;
