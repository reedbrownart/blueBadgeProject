import React from 'react';
import {Container, Row, Col} from "reactstrap";
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
                <h2>Checkout our featured items of the week</h2>
                <br/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor!</h5>
                <br/>
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
                <br/>
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
                <br/>
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