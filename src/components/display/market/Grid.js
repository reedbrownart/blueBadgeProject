import React from 'react';
import {Container, Row, Col} from "reactstrap";
import Product from "../../maincomponents/Product"

function Grid() {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                    <Col>
                        <Product />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Grid;

//test