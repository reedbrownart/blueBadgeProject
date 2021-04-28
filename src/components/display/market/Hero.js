import React from 'react';
import { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";


function Hero(props) {
    const { updateToken } = props;
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://blue-badge-agora-server.herokuapp.com/user/login", {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(
            (response => response.json())
        ).then((data) => {
            updateToken(data.token);
        }).catch((error) => (console.log(error)))
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <img width="100%" height="250px" src="https://www.ancient-origins.net/sites/default/files/field/image/Parthenon.jpg" />
                    </Col>

                    <Col>
                        <h1>Agora Marketplace</h1>
                        <h4>Zee only marketplace that does NOT bloodsuck the artist hard earned monies</h4>
                    </Col>

                    <Col>
                        <h3>Login</h3>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                            </FormGroup>
                            <Button type="submit">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
        </div>
    );
}

export default Hero;