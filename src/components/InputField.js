import React from 'react';

const InputField = ({ type, placeholder, name, value, onChange, required }) => {
  return (
    <div className="mb-4">
      {/* <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Username
      </label> */}
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
