import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AskContainer, AskTitle, AskText, FNameWrapper, LNameWrapper, EmailWrapper, MsgWrapper, CheckboxWrapper, MainButton, BtnWrapper } from "./styles";
import { Input, Textarea, Text, Checkbox } from "@nextui-org/react";

const AskAQuestion = () => {
    return (
        <>
            <AskContainer>
                <AskTitle>
                    Ask a question
                </AskTitle>
                <AskText>
                    Ask a question or send a message. If your choose, your question can be answered publicly for other founders to see it.
                </AskText>
                <Row>
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
                            />
                        </LNameWrapper>
                    </Col>

                </Row>
                <Row>
                    <EmailWrapper>
                        <Input
                            clearable
                            bordered
                            fullWidth
                            color="#ED1E79"
                            size="lg"
                            placeholder="Email"
                        />
                    </EmailWrapper>
                </Row>
                <Row>
                    <MsgWrapper>
                        <Textarea
                            clearable
                            bordered
                            fullWidth
                            resize="none"
                            color="#ED1E79"
                            size="lg"
                            placeholder="Message"
                        />
                    </MsgWrapper>
                </Row>
                <Row >
                    <CheckboxWrapper>
                        <Checkbox>
                            <Text size={18}>I agree to publish the question and answer</Text>
                        </Checkbox>
                    </CheckboxWrapper>
                </Row>
                <Row>
                    <BtnWrapper>
                        <Link href="/mentor">
                            <MainButton to="Send" >
                                Send
                            </MainButton>
                        </Link>
                    </BtnWrapper>
                </Row>
            </AskContainer>
        </>

    );

}

export default AskAQuestion;
