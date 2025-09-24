import "./App.css";
import React, { Suspense } from "react";

import Availableplayers from "./components/AvailablePlayers/Availableplayers";
import SelectedPlayer from "./components/AvailablePlayers/SelectedPlayers/SelectedPlayer";
import Navbar from "./components/AvailablePlayers/Navbar/Navbar";
import Banner from "./components/AvailablePlayers/Banner/Banner";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  const data = await res.json();
  console.log(data);
  return data;
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense>
        <Availableplayers playersPromise={playersPromise} />
      </Suspense>
      <SelectedPlayer />
    </>
  );
}

export default App;
