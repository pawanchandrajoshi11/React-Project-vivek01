import React from "react";
const Right = ({ name, email, number }) => {

  return (
    <div>
      <div>
        <label htmlFor="name">Name: </label>
        <h3>{name}</h3>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <h3>{email}</h3>
      </div>
      <div>
        <label htmlFor="number">Number: </label>
        <h3>{number}</h3>
      </div>
    </div>
  );
};
export default Right;
