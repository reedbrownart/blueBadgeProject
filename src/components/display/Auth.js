import React, { useState } from 'react';
import Modal from 'bootstrap';
import './Auth.css';


const Auth = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const title = () => {
      return login ? 'Login' : "Register"
  }
  const loginToggle = (event) => {
      event.preventDefault()

      setLogin(!login)

      setEmail('')
      setUserName('')
      setFirstName('')
      setLastName('')
      setPassword('')
  }

  const signupFields = () => {
      return !login ?
      (
        <div>
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={login} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Login</ModalHeader>
          <ModalBody>
            <Form>
            <FormGroup>
          <Label htmlFor="email">Email:</Label>
            <Input type="text" id="email" value={email}
            onChange={(e)=> setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="firstName">First Name:</Label>
            <br />
            <Input type="text" id="firstName" value={firstName}
            onChange={(e)=> setFirstName(e.target.value)} />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="lastName">Last Name:</Label>
            <br />
            <Input type="text" id="lastName" value={lastName}
            onChange={(e)=> setLastName(e.target.value)} />
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Login</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      ) : null
  }
  return(
      <div>
          <form>
              <h1>{title()}</h1>

              {signupFields()}

              <label htmlFor="username">Username:</label>
              <br />
              <input type="text" id="username" value={username}
              onChange={(e)=> setUserName(e.target.value)} />
               <br />
               <label htmlFor="password">Password:</label>
              <br />
              <input type="text" id="password" value={password}
              onChange={(e)=> setPassword(e.target.value)} />
              <br />
              <button onClick={(e) => loginToggle(e)} >Login/Register Toggle</button>
              <br />
              <button type="submit">Sumbit User Data </button>

          </form>
          </div>
      
  )
  
};

