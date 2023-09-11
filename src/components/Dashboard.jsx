import Input from "./Input";
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
      <div className="w-[25%] border  h-screen ">
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

      <div className="w-[50%] border h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[60px] rounded-full flex items-center mt-4 mb-4 px-14">
          <div className=" border border-primary p-[2px] rounded-full">
            <img src={userImage} alt="userImage" width={40} height={40} />
          </div>
          <div className="ml-4">
            <h3 className="text-base font-semibold">Mohammed Shaaban</h3>
            <p className="text-sm font-light">my account</p>
          </div>
          <div className="cursor-pointer ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              <path d="M15 6h6m-3 -3v6"></path>
            </svg>
          </div>
        </div>

        <div className="h-[75%] w-full border overflow-y-scroll">
          <div className=" p-14">
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>{" "}
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>{" "}
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>{" "}
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>{" "}
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>{" "}
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>{" "}
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>{" "}
            <div className="max-w-[55%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
            <div className="max-w-[55%] bg-primary text-white rounded-b-xl rounded-tr-xl p-4 ml-auto mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores eaque nisi accusamus
            </div>
          </div>
        </div>
        <div className="p-8 w-full flex items-center">
          <Input
            devclasName="w-[75%]"
            className="rounded-full shadow-md bg-secondary p-2 px-4 border-0 focus:ring-0 focus:bottom-0 outline-none "
            plasholder="Type a message..."
          />
          <div className="ml-4 p-3 cursor-pointer bg-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
          </div>
          <div className="ml-3 p-3 cursor-pointer bg-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M9 12h6"></path>
              <path d="M12 9v6"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="w-[25%] border  h-screen"></div>
    </div>
  );
};

export default Dashboard;