import React from "react";
import SelectedCard from "../../SelectedCard/SelectedCard";

const SelectedPlayer = ({ purchasedPlayers }) => {
  console.log(purchasedPlayers);
  return (
    <div className="px-8">
      {purchasedPlayers.map((player) => (
        <SelectedCard player={player}></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayer;
