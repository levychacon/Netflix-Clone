import React from "react";
import {
  Container,
  Base,
  Title,
  Error,
  SmallText,
  Text,
  Link,
  Input,
  Submit,
} from "./styles";

export const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
  
Form.Error = function FormError({ children, ...restProps }) {
    return <Error{...restProps}>{children}</Error>;
  };

  Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };

  Form.SmallText = function FormSmallText({ children, ...restProps }) {
    return <SmallText{...restProps}>{children}</SmallText>;
  };

  Form.Link= function FormLink({ children, ...restProps }) {
    return <Link{...restProps}>{children}</Link>;
  };

  Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
  };

  Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit{...restProps}>{children}</Submit>;
  };