import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Form = ({ isSignIn = false }) => {
  const navegate = useNavigate();
  const [data, setData] = useState({
    ...(!isSignIn && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:8000/api/${isSignIn ? "login" : "register"}`, //
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const userData = await res.json();
      if (userData?.message) {
        alert(userData.message);
      }
      if (userData?.token) {
        localStorage.setItem("chatAppUser:token", userData?.token);
        localStorage.setItem(
          "chatAppUser:user",
          JSON.stringify(userData?.user)
        );

        navegate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#e1edff] h-screen flex justify-center items-center">
      <div className="bg-white w-[550px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold ">
          Weclome {isSignIn && "Back"}
        </div>
        <div className="text-xl font-semibold mb-14 ">
          {isSignIn ? "Sign in to started" : "Sign up now to get started"}
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col justify-center items-center w-full"
        >
          {!isSignIn && (
            <Input
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
              label="Full Name"
              name="name"
              plasholder="Enter Your Full Name"
              className="mb-6 rounded-lg"
              devclasName="w-[75%]"
            />
          )}
          <Input
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="email"
            label="Email Address"
            name="email"
            plasholder="Enter Your Email Address"
            className="mb-6 rounded-lg"
            devclasName="w-[75%]"
          />
          <Input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
            label="Password"
            name="password"
            plasholder="Enter Your Password"
            className="mb-10 rounded-lg"
            devclasName="w-[75%]"
          />
          <Button
            calssName="w-[75%]"
            type="submit"
            label={isSignIn ? "Sign in" : "Sign up"}
          />
        </form>
        <div className="mt-2">
          Alrdy have an account?{" "}
          <Link
            to={isSignIn ? "/user/sign-up" : "/user/sign-in"}
            className="text-primary cursor-pointer underline"
          >
            {" "}
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
