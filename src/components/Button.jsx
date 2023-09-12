import React from "react";

const Button = ({
  label = "Button",
  type = "button",
  calssName = "w-1/2",
  disable = false,
}) => {
  return (
    <button
      type={type}
      disabled={disable}
      className={`${calssName} text-white bg-primary hover:bg-primaryHover focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm  px-5 py-2.5 text-center `}
    >
      {label}
    </button>
  );
};

export default Button;
