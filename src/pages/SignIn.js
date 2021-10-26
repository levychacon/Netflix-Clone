import React, { useState, useContext } from "react";
import {useHistory} from 'react-router-dom';
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components/form";
import * as ROUTES from '../constants/routes'

export const SignIn = () => {
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory()

  const isInvalid = emailAdress === " " || password === "";
  const handleSignin = (event) => {
    event.preventDefault();
    console.log(password)

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAdress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      })
      .catch((error) => {
        setEmailAdress('');
        setPassword('');
        setError(error.message)
       
        
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
            placeholder="email adress"
            value={emailAdress}
            onChange={( event) => setEmailAdress(event.target.value)}
          ></Form.Input>

          <Form.Input
            placeholder="password"
            value={password}
            autoComplete="off"
            onChange={(event) => setPassword(event.target.value)}
          ></Form.Input>

          <Form.Submit type="submit" disabled={isInvalid} >
            Sign in
          </Form.Submit>

          <Form.Text>
            New to netflix? <Form.Link to="/signup">Sign up now</Form.Link>
          </Form.Text>

          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignIn;
