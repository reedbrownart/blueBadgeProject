import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Product(props) {

    const {productName, price, description, stock, storeOwner, imageURL} = props;


    
    return (
        <>
            <h2>Test Text.</h2>
            <Card>
                <CardImg className = "cardImage" top width="100%" src={imageURL} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{productName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{stock}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{storeOwner}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button>Add to Cart</Button>
                </CardBody>
            </Card>
        </>
    );
}

export default Product;