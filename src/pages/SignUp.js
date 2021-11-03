import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components/form";
import * as ROUTES from "../constants/routes";

export const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        }).then(()=>{
            history.push(ROUTES.BROWSE)
        }).catch((error)=>{
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message)
        })
      );
  };
  const isInvalid = firstName === "" || emailAddress === "" || password === "";
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="first name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            ></Form.Input>
            <Form.Input
              placeholder="email adress"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
            ></Form.Input>

            <Form.Input
              placeholder="password"
              value={password}
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            ></Form.Input>

            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Alredy a user? <Form.Link to="/signin">Sign in now</Form.Link>
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

export default SignUp;
