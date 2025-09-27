import "./App.css";
import React, { Suspense, useState } from "react";

import Availableplayers from "./components/AvailablePlayers/Availableplayers";
import SelectedPlayer from "./components/AvailablePlayers/SelectedPlayers/SelectedPlayer";
import Navbar from "./components/AvailablePlayers/Navbar/Navbar";
import Banner from "./components/AvailablePlayers/Banner/Banner";
// import { use } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  const data = await res.json();
  console.log(data);
  return data;
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filterdata = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    console.log(p);
    setPurchasedPlayers(filterdata);
    setAvailableBalance(
      availableBalance +
        parseInt(p.price.split("USD").join("").split(",").join(""))
    );
  };

  return (
    <>
      <Navbar availableBalance={availableBalance} />
      <Banner />
      <div className=" px-8 container mx-auto flex justify-between items-center ">
        <h1 className="font-bold lg:text-3xl text-xl">
          {toggle === true
            ? "Available Players"
            : `Selected Players(${purchasedPlayers.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-4 border-2 font-semibold ${
              toggle === true ? "bg-[#E7FE29]" : ""
            } border-r-0 border-gray-300 rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-4 border-2 border-l-0  ${
              toggle === false ? "bg-[#E7FE29]" : ""
            } border-gray-300 rounded-r-xl`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="Loading loading-spinner loading-xl"></span>
          }
        >
          <Availableplayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          />
        </Suspense>
      ) : (
        <SelectedPlayer
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        />
      )}
    </>
  );
}

export default App;
