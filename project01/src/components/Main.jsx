import React, { useEffect } from "react";
import { useState } from "react";
import Left from "./Left";
import Right from "./Right";

const Main = () => {
  const [arrayData, setArrayData] = useState([]);
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [checkBox, setCheckBox] = useState(false);

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

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setData({
      name: e.target[0].value,
      email: e.target[1].value,
      number: e.target[2].value,
    });
    // setName("");
    // setNumber("");
    // setEmail("");
    // setCheckBox(false);
    console.log("Submitted!");
    //console.log(data);
  };

  useEffect(() => {
    console.log("gtttt ", data);
    if (data) {
      setArrayData([...arrayData, data]);
    }
  }, [data]);

  useEffect(() => {
    console.log("array= ", arrayData);
  }, [arrayData]);


  return (
    <div>
      <Left
        name={name}
        email={email}
        number={number}
        checkBox={checkBox}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleCheckBox={handleCheckBox}
        handleSubmit={handleSubmit}
        handleEmailChange={handleEmailChange}
      />
      <Right name={name} number={number} email={email} />
    </div>
  );
};

export default Main;
