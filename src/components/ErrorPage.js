import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { DarkTheme } from "../components/Themes";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 4.8rem;
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  text-transform: capitalize;
`;

const Error = (props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper>Page Not Found</Wrapper>
      <NavLink className="btn" role="button" to="/">
        <Logo color={props.theme}>Go Back</Logo>
      </NavLink>
    </ThemeProvider>
  );
};

export default Error;
