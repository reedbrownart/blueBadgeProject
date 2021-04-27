import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import EditStore from '../../modals/EditStore';
import AddProduct from '../../modals/AddProduct';


const ExistingStore = (props) => {
    const {token } = props;

    return (
        <Container>
            <h1> STORE NAME </h1>
                <Row style={{padding: "1em 0"}}>
                    <Col m="8">
                        <h4 style={{textAlign: "left"}}>My Store Location</h4>
                        <h5 style={{textAlign: "left"}}>Here's some information on my store: Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. </h5>
                    </Col>
                    <Col xs="4" style={{}}>
                        <EditStore buttonLabel="Edit Store" className="editStore" />
                        <AddProduct buttonLabel="Add Product" className="addProduct" token = {token}/>
                    </Col>
                </Row>
        </Container>
    )
};

export default ExistingStore;