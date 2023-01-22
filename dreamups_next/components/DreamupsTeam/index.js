import {
    TeamContainer,
    TeamMemberFunction,
    TeamMemberName,
    TeamMemberImg,
    HeadingTeam
} from "./styles";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DreamupsTeam = () => {
    return (

        <>
            <TeamContainer>
                <Row>
                    <HeadingTeam>
                        The Dreamups Team
                    </HeadingTeam>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <Row>
                            <TeamMemberImg>
                                <img src="/aliona_rotaru.jpeg" width="250px" height="250px" />
                            </TeamMemberImg>
                        </Row>
                        <Row>
                            <TeamMemberName> Aliona Rotaru</TeamMemberName>
                        </Row>
                        <Row>
                            <TeamMemberFunction>
                                Executive Director
                            </TeamMemberFunction>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <TeamMemberImg>
                                <img src="/kardo_sharifi.jpeg" width="250px" height="250px" />
                            </TeamMemberImg>
                        </Row>
                        <Row>
                            <TeamMemberName> Kardo Sharifi</TeamMemberName>
                        </Row>
                        <Row>
                            <TeamMemberFunction>
                                Product Director
                            </TeamMemberFunction>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <TeamMemberImg>
                                <img src="/crina_burca.jpeg" width="250px" height="250px" />
                            </TeamMemberImg>
                        </Row>
                        <Row>
                            <TeamMemberName> Crina Burca</TeamMemberName>
                        </Row>
                        <Row>
                            <TeamMemberFunction>
                                Fundraising Manager
                            </TeamMemberFunction>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <TeamMemberImg>
                                <img src="/milena_obada.jpeg" width="250px" height="250px" />
                            </TeamMemberImg>
                        </Row>
                        <Row>
                            <TeamMemberName> Milena Obada</TeamMemberName>
                        </Row>
                        <Row>
                            <TeamMemberFunction>
                                Designer
                            </TeamMemberFunction>
                        </Row>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Col xs={2}></Col>
                    <Col>
                        <Row>
                            <TeamMemberImg>
                                <img src="/dmitri_namashco.jpeg" width="250px" height="250px" />
                            </TeamMemberImg>
                        </Row>
                        <Row>
                            <TeamMemberName> Dmitri Namashco </TeamMemberName>
                        </Row>
                        <Row>
                            <TeamMemberFunction>
                                Program Director
                            </TeamMemberFunction>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <TeamMemberImg>
                                <img src="/irina_potinga.jpeg" width="250px" height="250px" />
                            </TeamMemberImg>
                        </Row>
                        <Row>
                            <TeamMemberName> Irina Potinga </TeamMemberName>
                        </Row>
                        <Row>
                            <TeamMemberFunction>
                                Project Manager
                            </TeamMemberFunction>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <TeamMemberImg>
                                <img src="/mihai_stipanov.jpeg" width="250px" height="250px" />
                            </TeamMemberImg>
                        </Row>
                        <Row>
                            <TeamMemberName> Mihai Stipanov </TeamMemberName>
                        </Row>
                        <Row>
                            <TeamMemberFunction>
                                Founder
                            </TeamMemberFunction>
                        </Row>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </TeamContainer>
        </>
    )
}
export default DreamupsTeam;