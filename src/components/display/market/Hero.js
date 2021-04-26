import React from 'react';
import { Container, Row, Col} from "reactstrap";


function Hero() {
    return (
        <div>
            <Container>
                    <Row>
                        <Col>
                            <img width="100%" height="250px" src="https://www.ancient-origins.net/sites/default/files/field/image/Parthenon.jpg" />
                        </Col>

                        <Col>
                            <h1>Agora Marketplace</h1>
                            <h4>Zee only marketplace that does NOT bloodsuck the artist hard earned monies</h4>
                        </Col>

                        <Col>
                            <input value="input" placeholder="username"/>
                            <br/>
                            <input value="input" placeholder="password"/>
                            <br/>
                            <button>Start Shopping</button>
                        </Col>
                    </Row>
            </Container>
            <br/>
            <br/>
        </div>
    );
}

export default Hero;