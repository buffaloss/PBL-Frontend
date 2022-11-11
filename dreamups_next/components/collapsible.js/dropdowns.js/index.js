import React from "react"; 
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Container,
  Row,
  Col,
} from "reactstrap";

function Collabsible() {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  return (
    <>
      <div className=" accordion-1">
        <Container>
          <Row>
            <Col className=" ml-auto" md="12">
              <div className=" accordion my-3" id="accordionExample">
                <Card>
                  <CardHeader
                    id="headingOne"
                    aria-expanded={openedCollapse === "collapseOne"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseOne"
                              ? ""
                              : "collapseOne"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color="link"
                      >
                        Accelerators and Schools<br/>
                        Learn about scalable <br/>
                        startups and build something<br/>
                        people love<br/>
                        view all the programs<br/>{" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseOne"}
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                    id="collapseOne"
                  >
                    <CardBody className=" opacity-8">
                     Startup School <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                     Dreamable <img src = "/iconfinder_arrow_next_right_4829869.png"/><br/>
                     Upcelerator <img src = "/iconfinder_arrow_next_right_4829869.png"/><br/>
                     UpNext <img src = "/iconfinder_arrow_next_right_4829869.png"/><br/>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingTwo"
                    aria-expanded={openedCollapse === "collapseTwo"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseTwo"
                              ? ""
                              : "collapseTwo"
                          )
                        }
                        className=" w-100 text-primary text-left collapsed"
                        color="link"
                      >
                        Events <br/>
                        Get inspired, find a co-founder <br/>
                        and potential investors <br/> {" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseTwo"}
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                    id="collapseTwo"
                  >
                    <CardBody className=" opacity-8">
                       Catalyst Hackathons <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                       Dreamicon <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                       Startup grind Chișinău <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                       Founders Network <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingThree"
                    aria-expanded={openedCollapse === "collapseThree"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseThree"
                              ? ""
                              : "collapseThree"
                          )
                        }
                        className=" w-100 text-primary text-left collapsed"
                        color="link"
                      >
                        Smart capital <br/>
                        Access first capitalfor your startup and connect <br/>
                        with investors <br/> {" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseThree"}
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                    id="collapseThree"
                  >
                    <CardBody className=" opacity-8">
                       Mozaic <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingFour"
                    aria-expanded={openedCollapse === "collapseFour"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFour"
                              ? ""
                              : "collapseFour"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color="link"
                      >
                        Education <br/>
                        Learn and get inspired from  <br/>
                        founders and experts <br/> {" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseFour"}
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                    id="collapseFour"
                  >
                    <CardBody className=" opacity-8">
                       Dreamclass <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                       Blueprint <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingFifth"
                    aria-expanded={openedCollapse === "collapseFifth"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFifth"
                              ? ""
                              : "collapseFifth"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color="link"
                      >
                        Product Management <br/>
                        Switch your entire company to <br/>
                        a product building mindset or <br/>
                        become a product manager <br/> {" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseFifth"}
                    aria-labelledby="headingFifth"
                    data-parent="#accordionExample"
                    id="collapseFifth"
                  >
                    <CardBody className=" opacity-8">
                      Product School <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader
                    id="headingFifth"
                    aria-expanded={openedCollapse === "collapseFifth"}
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFifth"
                              ? ""
                              : "collapseFifth"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color="link"
                      >
                        Internships <br/>
                        Discover how startups are <br/>
                        build from the inside, find an <br/>
                        internship in a startup <br/> {" "}
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseFifth"}
                    aria-labelledby="headingFifth"
                    data-parent="#accordionExample"
                    id="collapseFifth"
                  >
                    <CardBody className=" opacity-8">
                      Starships <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Collabsible;