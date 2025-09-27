import React from "react";
import SelectedCard from "../../SelectedCard/SelectedCard";

const SelectedPlayer = ({ purchasedPlayers, removePlayer }) => {
  console.log(purchasedPlayers);
  return (
    <div className="px-8">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayer;
