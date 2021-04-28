import React, { useState, useEffect } from 'react';
import { Container, Row, Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle, Button } from "reactstrap";
import "./market.css"

function Grid(props) {


    const [productInfo, setProductInfo] = useState([]);

    const getProducts = () => {
        fetch("https://blue-badge-agora-server.herokuapp.com/product/", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setProductInfo(data);

            });
    }

    
    const populateProduct = () => {
        return (productInfo.splice(0, 8).map((item, index) => {
            return (
                <Card key={index} className="w-25">
                    <CardImg className="cardImage" top width="30%" src={item.imageURL} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{item.productName}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">${item.price}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{item.stock}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{item.Id}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        <Button>Add to Cart</Button>
                    </CardBody>
                </Card>
            )
        })
        )
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div>
            <Container className="containerFull">
                <h2>Checkout our featured items of the week</h2>
                <br />
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor!</h5>
                <br />
                <Row>
                    {populateProduct()}
                </Row>
            </Container>
        </div>
    );
}


export default Grid;