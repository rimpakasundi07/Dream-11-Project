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
      <div className=" px-8 container mx-auto flex justify-between items-center ">
        <h1 className="font-bold lg:text-3xl text-xl">Available Players</h1>
        <div>
          <button className="py-2 px-4 border-2 font-semibold bg-[#E7FE29] border-r-0 border-gray-300 rounded-l-xl ">
            Available
          </button>
          <button className="py-2 px-4 border-2 border-l-0 border-gray-300 rounded-r-xl">
            Selected <span>({0})</span>
          </button>
        </div>
      </div>
      <Suspense
        fallback={<span className="Loading loading-spinner loading-xl"></span>}
      >
        <Availableplayers playersPromise={playersPromise} />
      </Suspense>
      <SelectedPlayer />
    </>
  );
}

export default App;
