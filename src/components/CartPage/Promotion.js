import React, { useState } from "react";

function Promotion() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <form>
      <h2>Enter Promotion Code</h2>
      <input
        type="text"
        placeholder="Promotion code"
        value={input}
        onChange={onChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Promotion;
