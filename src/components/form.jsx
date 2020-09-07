//@ts-check
import React from "react";

const Form = ({ setValue, handleFormSubmit, children }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onInput={(value) => setValue(value.currentTarget.value)}
        placeholder="Enter your IP address"
      />
      <button onClick={handleFormSubmit}>Download</button>
      {children}
    </form>
  );
};

export default Form;
