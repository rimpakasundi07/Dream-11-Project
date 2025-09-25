import React, { use } from "react";
import flagImg from "../../assets/icons8-flag-50.png";
import userImg from "../../assets/icons8-user-50.png";
const Availableplayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="container px-8 mx-auto">
      <div className="card bg-base-100 p-4 w-96 shadow-sm">
        <figure>
          <img src="***" />
        </figure>
        <div className="mt-4">
          <div className="flex">
            <img className="" src={userImg} alt="" />{" "}
            <h2 className="card-title ml-2">Mahendra Singh Dhoni</h2>
          </div>
          <div className="flex justify-between items-center mt-4 py-2 border-b-1">
            <div className="flex items-center">
              <img src={flagImg} className=" w-[20px] h-[20px]" alt="" />
              <span className="pl-2">India</span>
            </div>
            <button className="btn hover:bg-purple-600 hover:text-white">
              All-rounder
            </button>
          </div>
          <div>
            <span className="font-semibold pt-2 ">Rating</span>
            <span className="font-semibold pt-2 pl-2 ">5</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-black font-semibold pt-2">Left-Hand-Bat</p>
            <p className="text-gray-500 ">Left-Hand-Bat</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-black font-semibold">Price: $1500000</p>
            <button className="btn hover:bg-sky-400 hover:text-white">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availableplayers;
