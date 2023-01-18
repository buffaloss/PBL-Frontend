import React from "react";
import { BtnWrapper, ContactContainer, ContactInfo, ContactItem, ContactQuestion, MainButton } from "./styles";
import Head from "next/head";
import Link from "next/link";
import { Col, Row } from "reactstrap";
import { Textarea } from "@nextui-org/react";
import { sendUserQuestion } from "../../services/mail.service";
import { useState } from "react";
import Swal from 'sweetalert2';

export default function ContactComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const getQuestionInfo = () => {
        if (!firstName || !lastName || !email || !msg) return;
        const questionData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            msg: msg,
            topic: "Contact Us"
        };

        sendUserQuestion(questionData).then(() => {
            setTimeout(() => {
                setFirstName("");
                setLastName("");
                setEmail("");
                setMsg("");
                Swal.fire({
                    title: 'Done!',
                    text: "The mesage was sent sucessfully ;)",
                    icon: 'success',
                    showCloseButton: true,
                    // backdrop: `
                    //   url("PYh.gif")
                    //   rgba(0,0,0,0.4)
                    //   left top
                    //   no-repeat
                    //   overlay-y auto
                    // `
                })
            }, "2000")
        });
    }
    return (

        <>
            <Head>
                
            </Head>
            <div className="contact">
                <ContactContainer>
                    <ContactInfo>
                        <h3>Contact us:</h3><br />
                        <ContactItem>
                            <img src="/Call.svg" /> +373 60988355
                        </ContactItem>
                        <ContactItem>
                            <img src="/Message.svg" /> hello@dreamups.com
                        </ContactItem>
                        <ContactItem>
                            <Link className="bcolor" href="https://www.google.com/maps/place/Dreamups+Campus/@47.0234257,28.8291181,18.5z/data=!4m13!1m7!3m6!1s0x40c97c330a87c115:0x9eb2f0b76f695837!2s31+August+1989+St+78,+Chi%C8%99in%C4%83u,+Moldova!3b1!8m2!3d47.0234095!4d28.8300394!3m4!1s0x40c97da406df23c7:0x28bffaa98e08573e!8m2!3d47.023549!4d28.8288411">
                                <img src="/Destination.svg" />31 August 1989 St 78, Chisinau
                            </Link>
                        </ContactItem>
                    </ContactInfo>
                    <ContactQuestion>
                        <h2>Get in touch with Dreamups!</h2><br />
                        <Row style={{ width: "100%" }}>
                            <Col>
                                <Textarea type="text"
                                    className="textarea"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="#ED1E79"
                                    size="lg"
                                    placeholder="First name"
                                    onChange={e => setFirstName(e.target.value)}
                                    value={firstName}>

                                </Textarea>
                            </Col>
                            <Col>
                                <Textarea type="text"
                                    className="textarea"
                                    clearable
                                    bordered
                                    fullWidth
                                    color="#ED1E79"
                                    size="lg"
                                    placeholder="Last name"
                                    onChange={e => setLastName(e.target.value)}
                                    value={lastName}>

                                </Textarea>
                            </Col>
                        </Row>
                        <Row style={{ width: "100%" }}>

                            <Textarea
                                className="textarea"
                                type="text"
                                clearable
                                bordered
                                fullWidth
                                color="#ED1E79"
                                size="lg"
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            >

                            </Textarea>
                        </Row>
                        <Row style={{ width: "100%" }}>
                            <Textarea

                                className="input textarea"
                                clearable
                                bordered
                                fullWidth
                                resize="none"
                                color="#ED1E79"
                                size="lg"
                                rows={5}
                                placeholder="Message"
                                onChange={e => setMsg(e.target.value)}
                                value={msg}>

                            </Textarea>
                        </Row>
                        <Row>
                            <BtnWrapper>
                                <MainButton onClick={getQuestionInfo}>
                                    Send Message
                                </MainButton>
                            </BtnWrapper>
                        </Row>
                    </ContactQuestion>
                </ContactContainer>
            </div>


        </>

    )

}