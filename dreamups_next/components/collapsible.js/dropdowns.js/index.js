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
            <Col className=" ml-auto" xxl="4">
              {/* <div className=" accordion my-3" id="accordionExample"> */}
                <Card>
                  <CardHeader
                    id="headingOne"
                    aria-expanded={openedCollapse === "collapseOne"}
                  ><h3 className = "mb-0 text-center">Accelerators and Schools</h3>
                    <h6 className=" mb-0 text-center " >
                        Learn about scalable <br/>
                        startups and build something<br/>
                        people love<br/>
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseOne"
                              ? ""
                              : "collapseOne"
                          )
                        }
                        className=" w-100 text-primary text-left #d41750"
                        color = "#d41750"
                        
                      >
                       
                        view all the programs<br/>{" "}
                      </Button>
                    </h6>
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
              </Col>
              <Col className=" ml-auto" xxl="4">
                <Card>
                  <CardHeader
                    id="headingTwo"
                    aria-expanded={openedCollapse === "collapseTwo"}
                  > <h3 className = "mb-0 text-center">Events</h3>
                    <h6 className=" mb-0 text-center"> 
                        Get inspired, find a co-founder <br/>
                        and potential investors <br/>
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseTwo"
                              ? ""
                              : "collapseTwo"
                          )
                        }
                        className=" w-100 text-primary text-left collapsed"
                        color="#d41750"
                      >
                        view all events {" "}
                      </Button>
                    </h6>
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
                </Col>
                <Col className=" ml-auto" xxl="4">
                <Card>
                  <CardHeader
                    id="headingThree"
                    aria-expanded={openedCollapse === "collapseThree"}
                  > <h3 className ="mb-0 text-center">Smart capital</h3>
                    <h6 className=" mb-0 text-center"> 
                        Access first capitalfor your startup and connect <br/>
                        with investors <br/>
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseThree"
                              ? ""
                              : "collapseThree"
                          )
                        }
                        className=" w-100 text-primary text-left collapsed"
                        color="#fff"
                      >
                         Learn more{" "}
                      </Button>
                    </h6>
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
                </Col>
                <Col className=" ml-auto" xxl="4">
                <Card>
                  <CardHeader
                    id="headingFour"
                    aria-expanded={openedCollapse === "collapseFour"}
                  > <h3 className = "mb-0 text-center">Education</h3>
                    <h6 className=" mb-0 text-center"> 
                        Learn and get inspired from  <br/>
                        founders and experts <br/>
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFour"
                              ? ""
                              : "collapseFour"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color="#fff"
                      > view all the programs {" "}
                      </Button>
                    </h6>
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
                </Col>
                <Col className=" ml-auto" xxl="4">
                <Card>
                  <CardHeader
                    id="headingFifth"
                    aria-expanded={openedCollapse === "collapseFifth"}
                  > <h3 className = "mb-0 text-center">Product Management</h3>
                    <h6 className=" mb-0 text-center">
                        Switch your entire company to <br/>
                        a product building mindset or <br/>
                        become a product manager <br/> 
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseFifth"
                              ? ""
                              : "collapseFifth"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color=""
                      >Product School{" "}
                      </Button>
                    </h6>
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
                </Col>
                <Col className=" ml-auto" xxl="4">
                <Card>
                  <CardHeader
                    id="headingSixth"
                    aria-expanded={openedCollapse === "collapseSixth"}
                  > <h3 className=" mb-0 text-center">Internships</h3>
                    <h6 className=" mb-0 text-center"> 
                        Discover how startups are <br/>
                        build from the inside, find an <br/>
                        internship in a startup <br/>
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseSixth"
                              ? ""
                              : "collapseSixth"
                          )
                        }
                        className=" w-100 text-primary text-left"
                        color=""
                      > Starships{" "}
                      </Button>
                    </h6>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseSixth"}
                    aria-labelledby="headingSixth"
                    data-parent="#accordionExample"
                    id="collapseSixth"
                  >
                    <CardBody className=" opacity-8">
                      Starships <img src = "/iconfinder_arrow_next_right_4829869.png"/> <br/>
                    </CardBody>
                  </Collapse>
                </Card>
                </Col>
              {/* </div> */}
  
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Collabsible;