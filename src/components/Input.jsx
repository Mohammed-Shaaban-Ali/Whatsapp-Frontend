import React from "react";

const Input = ({
  label = "",
  name = "",
  type = "text",
  className = "",
  isRequired = false,
  plasholder = "",
  onChange = () => {},
  value = "",
}) => {
  return (
    <div className="w-1/2">
      <label
        form={name}
        className="block mb-1 text-sm font-medium text-gray-700 "
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={plasholder}
        name={name}
        required={isRequired}
        onChange={onChange}
        // value={value}
        className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
      />
    </div>
  );
};

export default Input;
