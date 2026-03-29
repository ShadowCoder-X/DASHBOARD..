import React from "react";

function Input({ value, onChange }) {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="email">Email </label>
        <input
          value={value}
          onChange={onChange}
          className="w-full py-2 px-3 rounded-xl bg-gray-100"
          required
        />
      </div>
    </div>
  );
}

export default Input;
