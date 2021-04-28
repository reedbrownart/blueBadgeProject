import React, { useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Auth(props) {

  const { buttonLabel, Login, updateToken, clearToken } = props;

  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(false);
  const [signUp, setSignUp] = useState(true);

  const toggle = () => {
    setModal(!modal);
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    fetch('https://blue-badge-agora-server.herokuapp.com/user/register', {
      method: 'POST',
      body: JSON.stringify({ 
        username: username, 
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName
            
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then((res) => res.json())
      .then((data) => {
        updateToken(data.token);
      })
  }
  const handleLogin = (e) => {
    e.preventDefault();
    fetch('https://blue-badge-agora-server.herokuapp.com/user/login', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then((res) => res.json())
      .then((data) => {
        updateToken(data.token);
      })
  }

    return(
    
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={Login}>
        <ModalHeader>
          <Button onClick={()=> setLogin(!login)}>Login/Sign Up</Button>

        </ModalHeader>
        {login ? 
        <div>
         
          <ModalBody>
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username:</Label>
                <Input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password:</Label>
                <br />
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button color="primary" type="submit">
              Login
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
          <Button onClick={clearToken}>Logout</Button>
          </ModalFooter>
        </div>

        : signUp ?

  
        <div>
          <ModalBody>
            <Form onSubmit={handleSignUp}>
              <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="firstName">First Name:</Label>
                <br />
                <Input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name:</Label>
                <br />
                <Input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="username">Username:</Label>
                <Input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password:</Label>
                <br />
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <Button color="primary" id="primary" type="submit">
              Signup
            </Button>{" "}
            <Button color="secondary" id="secondary" onClick={toggle}>
              Cancel
            </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
          <Button onClick={clearToken}>Logout</Button>
          </ModalFooter>
        </div>

        : <> </>
}
      </Modal>
    </div>
    
  )
}

export default Auth;