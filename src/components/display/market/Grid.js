import React, { useState, useEffect } from 'react';
import { Container, Row, Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle, Button } from "reactstrap";
import "./market.css";

function Grid(props) {

    const { token } = props;


    const [productInfo, setProductInfo] = useState([]);

    const getProducts = () => {
        fetch(`${process.env.REACT_APP_API_URL}/product/`, {
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

    const addToCart = (productID) => {
        //e.preventDefault();
        console.log(productID)
        fetch(`${process.env.REACT_APP_API_URL}/user/addtocart/`, {
            method: "PUT",
            body: JSON.stringify({ "productID": productID }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": token
            })
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }

    const populateProduct = () => {
        return (productInfo.splice(0, 8).map((item, index) => {
            return (
                <Card key={index} id = "card">
                    <CardImg className="cardImage" src={item.imageURL} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5" id = "productName">{item.productName}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted" id = "price">Price: ${item.price}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted" id = "stock">Stock: {item.stock}</CardSubtitle>
                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Item ID: {item.id}</CardSubtitle> */}
                        <CardText>{item.description}</CardText>
                        <Button onClick={() => { addToCart(item.id) }} id = "addToCart">Add to Cart</Button>
                    </CardBody>
                </Card>
            )
        })
        )
    }

    useEffect(() => {
        getProducts();
    }, [token])

    return (
        <div>
            <Container id = "grid">
                <h2 class = "playfair" id = "gridTitle">Checkout our featured items of the week</h2>
                <Row id = "productGrid">
                    {populateProduct()}
                </Row>
            </Container>
        </div>
    );
}

export default Grid;