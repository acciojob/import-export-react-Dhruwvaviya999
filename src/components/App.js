import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading";
import InputQuery from "./InputQuery";
import SubHeading from "./SubHeading";
import SubmitButton from "./SubmitButton";

const App = () => {
  return (
    <div className="main">
        <h1>Welcome to our Site.</h1>
        <Heading />
        <InputQuery />
        <SubHeading />
        <SubmitButton />
    </div>
  )
}

export default App;


