import React, { useState } from "react";
import "./InputField.css";
function InputField({}) {
  const [query, setQuery] = useState("");
  return (
    <input
      id="jesus"
      value={query}
      onChange={(event) => {
        setQuery(event.target.value);
      }}
      className="input"
      placeholder="Get Whiskey bro..."
    />
  );
}

export default InputField;
