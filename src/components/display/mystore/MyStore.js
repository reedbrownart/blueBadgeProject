import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import CreateStore from '../../modals/CreateStore';
import EditStore from '../../modals/EditStore';
import AddProduct from '../../modals/AddProduct';
import EditProduct from '../../modals/EditProduct';
import StoreGrid from './storeGrid';

function MyStore() {
    return(
        <div>
            <Container>

                {/* COMMENT: I added in textAlign and padding styles in-line
                I wanted to get an idea of how things would look without effecting
                styles at a larger scope. We should discuss:
                   - Are there multiple components/elements that can match style
                   - Do we want to style w/ Reactstrap, styled-components, material-ui
                   - My vote would likely be Reactstrap base (as much as possible) and 
                     styled-components to handle specifics of individaul components */}

                <h1> STORE NAME </h1>
                <Row style={{padding: "1em 0"}}>
                    <Col m="8">
                        <h4 style={{textAlign: "left"}}>My Store Location</h4>
                        <h5 style={{textAlign: "left"}}>Here's some information on my store: Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. </h5>
                    </Col>
                    <Col xs="4">
                        <EditStore buttonLabel="Edit Store" className="editStore" />
                        <AddProduct buttonLabel="Add Product" className="addProduct" />
                    </Col>
                </Row>
                {<StoreGrid />}
            </Container>
        </div>
    );
}

export default MyStore;