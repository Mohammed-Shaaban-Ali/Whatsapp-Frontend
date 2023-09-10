import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ isSignIn = true }) => {
  const [data, setData] = useState({
    ...(!isSignIn && {
      name: "",
    }),
    email: "",
    password: "",
  });
  return (
    <div className="bg-white w-[550px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold ">
        Weclome {isSignIn && "Back"}
      </div>
      <div className="text-xl font-semibold mb-14 ">
        {isSignIn ? "Sign in to started" : "Sign up now to get started"}
      </div>

      <form className="flex flex-col justify-center items-center w-full">
        {!isSignIn && (
          <Input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            label="Full Name"
            name="name"
            plasholder="Enter Your Full Name"
            className="mb-6"
          />
        )}
        <Input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          label="Email Address"
          name="email"
          plasholder="Enter Your Email Address"
          className="mb-6"
        />
        <Input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
          label="Password"
          name="password"
          plasholder="Enter Your Password"
          className="mb-10"
        />
        <Button className="w-1/2" label={isSignIn ? "Sign in" : "Sign up"} />
      </form>
      <div className="mt-2">
        Alrdy have an account?{" "}
        <span className="text-primary cursor-pointer underline">
          {" "}
          {isSignIn ? "Sign up" : "Sign in"}
        </span>
      </div>
    </div>
  );
};

export default Form;
