import React from "react";

const Button = ({
  label = "Button",
  type = "button",
  calssName = "",
  disable = false,
}) => {
  return (
    <button
      type={type}
      disabled={disable}
      className={` text-white bg-primary hover:bg-primaryHover focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center ${calssName}`}
    >
      {label}
    </button>
  );
};

export default Button;
