import { useState } from "react";

const Left = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
  };
    
    const handleNumberChange = (e) => {

        let targetNumber = e.target.value.replace(/\D/g, '');
        if (targetNumber[0] === '0') {
            return
        }
        if (targetNumber.length > 10) {
            targetNumber = targetNumber.slice(0, 10);
        }
        setNumber(targetNumber);
        console.log(e.target.value);
    }

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
        <input type="email" placeholder="johndoe@gmail.com" required />
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

      <button type="submit">Submit</button>
    </form>
  );
};
export default Left;
