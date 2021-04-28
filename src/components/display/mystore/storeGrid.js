import React from 'react';
import { Container, Row, Col,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import EditProduct from '../../modals/EditProduct';
import './mystore.css';


const StoreGrid = (props) => {

    //const {products, fetcher} = props;
    //console.log(products);

    //the array below can be deleted
    //StoreGrid should receive fetched 'products' as a prop -> this becomes the substitute for ExampleArray

    //REQUESTING CHANGES TO EditProduct.js
    //Final field should be a URL -> this way, user's could still use images from online or hosting services
    //Fetcher is imported from above. Needs to be taken out of comment in returned component section below.
        //Add fetcher to 2nd promise so that StoreGrid will update w/ each update

    const exampleArray = [
        {
            id: 9,
            productName: "Product ID 9",
            price: 20,
            description: "Nice product",
            stock: 300,
            imageURL: "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
            createdAt: "2021-04-26T17:44:14.368Z",
            updatedAt: "2021-04-26T17:44:14.368Z",
            storeId: 4
        },
        {
            id: 10,
            productName: "Product ID 10",
            price: 20,
            description: "Nice product",
            stock: 300,
            imageURL: "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
            createdAt: "2021-04-26T17:44:18.799Z",
            updatedAt: "2021-04-26T17:44:18.799Z",
            storeId: 4
        },
        {
            id: 11,
            productName: "Product ID 11",
            price: 20,
            description: "Nice product",
            stock: 300,
            imageURL: "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
            createdAt: "2021-04-26T17:44:14.368Z",
            updatedAt: "2021-04-26T17:44:14.368Z",
            storeId: 4
        },
        {
            id: 12,
            productName: "Product ID 12",
            price: 20,
            description: "Nice product",
            stock: 300,
            imageURL: "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
            createdAt: "2021-04-26T17:44:18.799Z",
            updatedAt: "2021-04-26T17:44:18.799Z",
            storeId: 4
        },
        {
            id: 13,
            productName: "Product ID 13",
            price: 20,
            description: "Nice product",
            stock: 300,
            imageURL: "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
            createdAt: "2021-04-26T17:44:14.368Z",
            updatedAt: "2021-04-26T17:44:14.368Z",
            storeId: 4
        },
        {
            id: 14,
            productName: "Product ID 14",
            price: 20,
            description: "Nice product",
            stock: 300,
            imageURL: "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg",
            createdAt: "2021-04-26T17:44:18.799Z",
            updatedAt: "2021-04-26T17:44:18.799Z",
            storeId: 4
        },
    ];

    const populateStore = () => {
        return (exampleArray.splice(0,12).map((item, index) => {
            return(
            <Card key={index} className="w-25" >
                <CardImg className = "cardImage" top width="30%" src={item.imageURL} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{item.productName}</CardTitle>
                    <CardText>{item.description}</CardText>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{item.description}</CardSubtitle> */}
                    <CardSubtitle tag="h6" className="mb-2 text-muted">${item.price}  -  {item.stock} in Stock</CardSubtitle>
                </CardBody>
                <EditProduct buttonLabel="Edit Product" className="editProduct" productId={item.id} /* fetcher={fetcher} *//>
            </Card>
            )
        })

        )
    }

    return (
        <>
            <div class="cardDisplay">
                {populateStore()}
            </div>
        </>
    );
}

export default StoreGrid;