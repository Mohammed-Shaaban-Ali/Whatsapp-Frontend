import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <div className="bg-white w-[550px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold ">Weclome</div>
      <div className="text-xl font-light mb-14">Sign up now to get started</div>
      <form className="flex flex-col justify-center items-center w-full">
        <Input
          label="Full Name"
          name="name"
          plasholder="Enter Your Full Name"
          className="mb-6"
        />
        <Input
          type="email"
          label="Email Address"
          name="email"
          plasholder="Enter Your Email Address"
          className="mb-6"
        />
        <Input
          type="password"
          label="Password"
          name="password"
          plasholder="Enter Your Password"
          className="mb-6"
        />
      </form>
    </div>
  );
};

export default Form;