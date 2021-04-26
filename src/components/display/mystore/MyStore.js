import React from 'react';
import CreateStore from '../../modals/CreateStore';
import EditStore from '../../modals/EditStore';
import AddProduct from '../../modals/AddProduct';
import EditProduct from '../../modals/EditProduct';

function MyStore() {
    return(
        <div>
            <CreateStore buttonLabel = "Create Store" className = "createStore"/>
            <EditStore  buttonLabel = "Edit Store" className = "createStore"/>
            <AddProduct  buttonLabel = "Add New Product" className = "createStore"/>
            <EditProduct  buttonLabel = "Edit Product Listing" className = "createStore"/>
        </div>
    );
}

export default MyStore;