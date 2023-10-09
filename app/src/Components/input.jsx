
import React from "react";

  function Input({ label, id, type, name, placeholder, onChange, value }) {
    return (
      <>
        <label className="label">{label}</label>
        <input
       
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
      </>
    );
  }

  export default Input;