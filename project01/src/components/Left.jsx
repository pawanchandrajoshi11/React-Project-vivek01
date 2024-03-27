import React from "react";

const Left = ({
  name,
  email,
  number,
  checkBox,
  handleNameChange,
  handleEmailChange,
  handleNumberChange,
  handleCheckBox,
  handleSubmit,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="John Doe"
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Enter your email: </label>
        <input type="email" placeholder="johndoe@gmail.com" required value={email} onChange={handleEmailChange}/>
      </div>
      <div>
        <label htmlFor="phoneNo">Enter your contact number: </label>
        <input
          type="tel"
          placeholder="8945298290"
          name="contact"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="checkbox">True to my knowledge: </label>
        <input
          type="checkbox"
          name="checkbox"
          value={checkBox}
          onChange={handleCheckBox}
          required
          
        />
      </div>

      <button type="submit" id="submit-btn" disabled={!checkBox}>Submit</button>
    </form>
  );
};
export default Left;
