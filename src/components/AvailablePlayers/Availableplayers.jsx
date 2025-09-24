import React, { use } from "react";

const Availableplayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return <div>Available</div>;
};

export default Availableplayers;
