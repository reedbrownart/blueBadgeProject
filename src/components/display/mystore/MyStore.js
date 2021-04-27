import React, { useState } from 'react';
import NewStore from './NewStore';
import ExistingStore from './ExistingStore';

import EditProduct from '../../modals/EditProduct';
import StoreGrid from './storeGrid';

function MyStore(props) {
    const {token } = props;

    const [hasStore, setHasStore] = useState(false);
    /* const [products, setProducts] = useState([]);
    const [userOnPage, setUserOnPage] = useState();

    setProducts(exampleArray); */

    function fetcher() {
        fetch("https://blue-badge-agora-server.herokuapp.com/store/mystore")
            .then(response => response.json())
            .then((data) => {           //will have to wait for deployed server to check this
                //setProducts(data)
                //products = data;
                console.log(data);
                setHasStore(true)
            })
            .catch((err) => {           //this part works
                console.log(err);
                setHasStore(false);
                //setUserOnPage(fetchInfo)
            })
        console.log(hasStore)
    }

    function swapState() {
        setHasStore(!hasStore);
        console.log(hasStore);
    }

    return(
        <>
            <button onClick={fetcher}>TEST BUTTON</button>
            <button onClick={swapState}>SWAP STATE</button>
            {hasStore ? <ExistingStore token = {token}/> : <NewStore token = {token}/>}
            {hasStore ? <StoreGrid fetcher={fetcher} token = {token}/> : <></>}
            {/* <StoreGrid products={products} /> */}

        </>
    );
}

export default MyStore;