import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border-2 rounded-xl mt-5 border-gray-300 p-3 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={player.player_image}
          className="h-[50px] w-[50px] rounded-xl"
          alt=""
        />
        <div className="ml-2">
          <h1 className="font-bold ">{player.player_name}</h1>
          <p className="text-xs">{player.batting_style}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <img src="https://i.ibb.co/tPKHJz3c/Frame.png" alt="" />{" "}
      </div>
    </div>
  );
};

export default SelectedCard;
