import React from "react";
import userImage from "../image/user.svg";

const Dashboard = () => {
  const Contanent = [
    { name: "test1", status: "available", image: userImage },
    { name: "test2", status: "available", image: userImage },
    { name: "test3", status: "available", image: userImage },
    { name: "test4", status: "available", image: userImage },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[25%] border  h-screen bg-secondary">
        <div className="flex justify-center items-center my-8">
          <div className=" border border-primary p-[2px] rounded-full">
            <img src={userImage} alt="userImage" width={60} height={60} />
          </div>
          <div className="ml-6">
            <h3 className="text-2xl">Mohammed Shaaban</h3>
            <p className="text-lg font-light">my account</p>
          </div>
        </div>
        <hr />
        <div className="mx-12 mt-8">
          <div className="text-primary text-xl">Messages</div>
          <div className="">
            {Contanent?.map((item, index) => (
              <div
                key={index}
                className="flex  items-center py-6 border-b border-b-gray-300"
              >
                <div className="cursor-pointer flex items-center">
                  <div className=" border border-blue-300 p-[2px] rounded-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={45}
                      height={45}
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="text-lg font-light text-gray-600">
                      {item.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[50%] border h-screen"></div>
      <div className="w-[25%] border  h-screen"></div>
    </div>
  );
};

export default Dashboard;
