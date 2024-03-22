import React from "react";
import { useState } from "react";
import Left from "./Left";
import Right from "./Right";

const Main = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (e) => {
    let targetNumber = e.target.value.replace(/\D/g, "");
    if (targetNumber[0] === "0") {
      return;
    }
    if (targetNumber.length > 10) {
      targetNumber = targetNumber.slice(0, 10);
    }
    setNumber(targetNumber);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setNumber("");
    setEmail("");
    console.log("Submitted!");
  };
  return (
    <div>
      <Left
        name={name}
        email={email}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        handleEmailChange={handleEmailChange}
      />
      <Right name={name} number={number} email={email} />
    </div>
  );
};

export default Main;
