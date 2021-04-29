import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import EditProduct from '../../modals/EditProduct';
import DeleteProduct from '../../modals/DeleteProduct';
import './mystore.css';

const StoreGrid = (props) => {

    const {
        fetcher,
        products
        } = props;

    let storeItems = '';

    if (products) {
        storeItems = products.length;
    } else {
        storeItems = 0;
    }

    const populateStore = () => {
        return (products.map((item, index) => {
            return(
            <Card key={index} className="w-25" >
                <CardImg className = "cardImage" top width="30%" src={item.imageURL} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{item.productName}</CardTitle>
                    <CardText>{item.description}</CardText>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{item.description}</CardSubtitle> */}
                    <CardSubtitle tag="h6" className="mb-2 text-muted">${item.price}  -  {item.stock} in Stock</CardSubtitle>
                </CardBody>
                <EditProduct buttonLabel="Edit Product" className="editProduct" productId={item.id} fetcher={fetcher} />
                <DeleteProduct buttonLabel= "Delete Product" class="editProduct" productId={item.id} productName={item.productName} fetcher={fetcher} />
            </Card>
            )
        }))
    }

    return (
        <>
            <div className="cardDisplay">
                {storeItems >= 1 ? populateStore() : <h4>You Don't Have Any Items Listed</h4>}
            </div>
        </>
    );
}

export default StoreGrid;