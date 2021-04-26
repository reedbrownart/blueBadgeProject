import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Product from "../../maincomponents/Product"

function Grid() {

    const productName = "Flower Pot";
    const price = 50;
    const description = "This is a flower pot!";
    const stock = 30;
    const storeOwner = "Reed Brown";
    const imageURL = "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg";


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Product
                            productName={productName}
                            price={price}
                            description={description}
                            stock={stock}
                            storeOwner={storeOwner}
                            imageURL={imageURL} />
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