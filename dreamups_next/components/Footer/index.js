/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { FooterMain, FooterContainer, TextContainer, TextInfo, ContactInfoContainer, FacebookContact, LinkedinContact, InstagramContact } from './styles';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

  return (
    <>
      <Head>
         
      </Head>
      <FooterMain>
        <FooterContainer>
          <TextContainer>
            <TextInfo>
              © 2022 Dreamups (Powered by Dreamups)
            </TextInfo>
          </TextContainer>
          <ContactInfoContainer>
            <Container>
              <Row>
                <Col sm={9}>
                </Col>
                <Col sm={1}>
                  <FacebookContact>
                    <Link href='https://www.facebook.com/Dreamups/'>
                      <img src="/facebook_icon.png" width="30" height="30" alt=""></img>
                    </Link>
                  </FacebookContact>
                </Col>
                <Col sm={1}>
                  <LinkedinContact>
                    <Link href='https://md.linkedin.com/company/dreamups'>
                      <img src="/linked_in_icon.png" width="30" height="30" alt=""></img>
                    </Link>
                  </LinkedinContact>
                </Col>
                <Col sm={1}>
                  <InstagramContact>
                    <Link href='https://www.instagram.com/dreamups/'>
                      <img src="/instagram_icon.svg" width="30" height="30" alt=""></img>
                    </Link>
                  </InstagramContact>
                </Col>
              </Row>
            </Container>
          </ContactInfoContainer>
        </FooterContainer>
      </FooterMain>

    </>
  )
}
export default Footer;
