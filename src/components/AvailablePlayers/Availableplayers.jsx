import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
const Availableplayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const playersData = use(playersPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 container md:px-8 gap-4  mx-auto">
      {playersData.map((player) => (
        <PlayerCard
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default Availableplayers;
