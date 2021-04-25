import React from 'react';
import Product from '../../maincomponents/Product';

function Grid() {

    const productName = "Flower Pot";
    const price = 50;
    const description = "This is a flower pot!";
    const stock = 30;
    const storeOwner = "Reed Brown";
    const imageURL = "https://static01.nyt.com/images/2018/05/03/us/03spongebob_xp/03spongebob_xp-videoSixteenByNineJumbo1600.jpg";


    return (
        <div>
            <h1>This is the Grid</h1>
            <Product
                productName={productName}
                price={price}
                description={description}
                stock={stock}
                storeOwner={storeOwner}
                imageURL={imageURL} />
            <Product
                productName={productName}
                price={price}
                description={description}
                stock={stock}
                storeOwner={storeOwner}
                imageURL={imageURL} />
            <Product
                productName={productName}
                price={price}
                description={description}
                stock={stock}
                storeOwner={storeOwner}
                imageURL={imageURL} />
            <Product
                productName={productName}
                price={price}
                description={description}
                stock={stock}
                storeOwner={storeOwner}
                imageURL={imageURL} />
        </div>
    );
}

export default Grid;