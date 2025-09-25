import React, { use } from "react";
import flagImg from "../../assets/icons8-flag-50.png";
import userImg from "../../assets/icons8-user-50.png";
const Availableplayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 container md:px-8 gap-4  mx-auto">
      {playersData.map((player) => (
        <div className="card bg-base-100 p-4 shadow-sm">
          <figure>
            <img
              className="rounded-2xl h-[300px] w-full object-cover "
              src={player["player_image"]}
            />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img className="" src={userImg} alt="" />{" "}
              <h2 className="card-title ml-2">{player.player_name}</h2>
            </div>
            <div className="flex justify-between items-center mt-4 py-2 border-b-1">
              <div className="flex items-center">
                <img src={flagImg} className=" w-[20px] h-[20px]" alt="" />
                <span className="pl-2">{player.player_country}</span>
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
              <p className="text-black font-semibold pt-2">
                {player.batting_style}
              </p>
              <p className="text-gray-500 ">{player.bowling_style}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-black font-semibold">${player.price}</p>
              <button className="btn hover:bg-sky-400 hover:text-white">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Availableplayers;
