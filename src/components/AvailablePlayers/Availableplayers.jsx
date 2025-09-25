import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
const Availableplayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 container md:px-8 gap-4  mx-auto">
      {playersData.map((player) => (
        <PlayerCard player={player}></PlayerCard>
      ))}
    </div>
  );
};

export default Availableplayers;
