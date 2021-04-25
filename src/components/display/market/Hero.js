import React from 'react';
import { Container, Row, Col, Card } from "reactstrap";

function Hero() {
    return (
        <div>
            <Container>
                    <Row>
                        <Col>
                            <img width="100%" height="280px" src="https://www.ancient-origins.net/sites/default/files/field/image/Parthenon.jpg" />
                        </Col>

                        <Col>
                            <h1>Agora Marketplace</h1>
                            <h4>Zee only marketplace that does NOT bloodsuck the artist hard earned monies</h4>
                        </Col>

                        {/* <Col>
                            <input type="text">Username</input>
                            <input type="text">Password</input>
                            <button onClick>Start Shopping</button>
                        </Col> */}
                    </Row>
            </Container>
        </div>
    );
}

export default Hero;