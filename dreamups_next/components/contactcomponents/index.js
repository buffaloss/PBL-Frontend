import React from "react";
import { BtnWrapper, ContactContainer, ContactInfo, ContactItem, ContactQuestion, EmailItem, FirstName, LastName, MainButton, TextContainer} from "./styles";
import Head from "next/head";
import Link from "next/link";
import { Col, Input, Row } from "reactstrap";
import { Textarea } from "@nextui-org/react";


export default function ContactComponent () {

    return(

        <>
         <Head>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap');
            </style>
        </Head>
            <div className="contact">
                <ContactContainer>
                    <ContactInfo>
                        <h3>Contactați-ne pe :</h3><br/>
                        <ContactItem>
                            <img src="/Call.svg"/> +373 60988355
                        </ContactItem>
                        <ContactItem>
                            <img src="/Message.svg"/> hello@dreamups.com
                        </ContactItem>
                        <ContactItem>
                            <Link className="bcolor" href="https://www.google.com/maps/place/Dreamups+Campus/@47.0234257,28.8291181,18.5z/data=!4m13!1m7!3m6!1s0x40c97c330a87c115:0x9eb2f0b76f695837!2s31+August+1989+St+78,+Chi%C8%99in%C4%83u,+Moldova!3b1!8m2!3d47.0234095!4d28.8300394!3m4!1s0x40c97da406df23c7:0x28bffaa98e08573e!8m2!3d47.023549!4d28.8288411">
                            <img src="/Destination.svg"/>31 August 1989 St 78, Chisinau
                            </Link>
                        </ContactItem>
                    </ContactInfo>
                    <ContactQuestion>
                        <Row style={{width: "100%"}}>
                            <Col>
                            <Textarea type="text"
                                className="textarea"
                                clearable
                                bordered
                                fullWidth
                                color="#ED1E79"
                                size="lg"
                                placeholder="First name">
                        
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
                                placeholder="Last name">

                        </Textarea>
                        </Col>
                        </Row>
                        <Row style={{width: "100%"}}>
                        
                        <Textarea 
                                className="textarea"
                                type="text"
                                clearable
                                bordered
                                fullWidth
                                color="#ED1E79"
                                size="lg"
                                placeholder="Email">

                        </Textarea>
                        </Row> 
                        <Row style={{width: "100%"}}>
                            <Textarea 
                                
                                className="input textarea"
                                clearable
                                bordered
                                fullWidth
                                resize = "none"
                                color="#ED1E79"
                                size="lg"
                                placeholder="Message">

                            </Textarea>
                        </Row> 
                        <Row>
                            <BtnWrapper>
                                <MainButton>
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