import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import banner from "./images/Women.png";

/**
* @author
* @function GWomen
**/

const GWomen = (props) => {
    return (
        <Layout>
            <Container>
                <Container>
                    <Col>
                        <br></br>
                        <br></br>
                        <Row>
                            <img
                                className="d-block w-100"
                                src={banner}
                                alt="Banner"
                            />{''}
                        </Row>
                        <Row>
                            <Container>
                                <br></br>
                                <p class="text-center"><h1>TOPS</h1></p>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Col>
                                    {/*Add WoMens Top Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add WoMens Top Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add WoMens Top Product Card here*/}
                                </Col>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <br></br>
                                <p class="text-center"><h1>BOTTOMS</h1></p>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Col>
                                    {/*Add WoMens Bottom Card here*/}
                                </Col>
                                <Col>
                                    {/*Add WoMens Bottom Card here*/}
                                </Col>
                                <Col>
                                    {/*Add WoMens Bottom Card here*/}
                                </Col>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <br></br>
                                <p class="text-center"><h1>FOOTWEAR</h1></p>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Col>
                                    {/*Add WoMens FOOTWEAR Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add WoMens FOOTWEAR Product Card here*/}
                                </Col>
                                <Col>
                                    {/*Add WoMens FOOTWEAR Product Card here*/}
                                </Col>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <br></br>
                                <p class="text-center"><h1>ACCESSORIES</h1></p>
                            </Container>
                        </Row>
                        <Row>
                            <Container fluid>
                                <Col>
                                    {/*Add WoMens ACCESSORIES Card here*/}
                                </Col>
                                <Col>
                                    {/*Add WoMens ACCESSORIES Card here*/}
                                </Col>
                                <Col>
                                    {/*Add WoMens ACCESSORIES Card here*/}
                                </Col>
                            </Container>
                        </Row>
                    </Col>
                </Container>
            </Container>
        </Layout>
    )

}

export default GWomen