import React from 'react';
import {Container, Row, Col, Button, Nav, NavItem, NavLink} from 'reactstrap';
import Grid from '../market/Grid';

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
                        <Button className="btn-success float-right">Edit User Info</Button>
                        <br />
                        <br />
                        <Button className="btn-success float-right">Edit Store Info</Button>
                        <br />
                        <br />
                        <Button className="btn-success float-right"> + Add Product</Button>
                    </Col>
                </Row>
                <Grid />
            </Container>
        </div>
    );
}

export default MyStore;