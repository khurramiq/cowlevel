import React from 'react';

const TextArea = ({
  id,
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows="4"
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextArea;
