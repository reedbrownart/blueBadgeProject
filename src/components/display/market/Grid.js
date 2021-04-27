import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Product from "../../maincomponents/Product"

function Grid() {

    const fetchProduct = (props) => {
        
        fetch("http://localhost:3000/product", {
            method: "GET",
            headers: new Headers({
                "content-Type": "application/json",
                Autorization: `${props.token}`,
            })
        })
            .then((res) => res.json())
            .then((productData) => {
                setProduct(productData);
            });
    };


    return (
        <div>
            <Container>
                <h2>Checkout our featured items of the week</h2>
                <br />
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor!</h5>
                <br />
                <Row>
                    <Col>
                        <Product fetchProduct={fetchProduct} token={props.token} />
                    </Col>
                    <Col>
                        <ProductTable
                            productName={productName}
                            price={price}
                            description={description}
                            stock={stock}
                            storeOwner={storeOwner}
                            imageURL={imageURL} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Grid;