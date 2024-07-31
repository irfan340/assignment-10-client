import { useLoaderData } from "react-router-dom"
import SpotCard from "./SpotCard";
import { useState } from "react";

const Home = () => {
    let loadedSpots=useLoaderData()
    let [spots, setSpots]= useState(loadedSpots)
    return (
        <div>
             <h1 className='text-4xl'>Total spots: {spots.length}</h1>
      <div className="grid md:grid-cols-3">
        {
          spots.map(spot=><SpotCard
          key={spot._id}
          spot={spot}
          spots={spots}
          setSpots={setSpots}
          ></SpotCard>)
        }
      </div>
        </div>
    );
};

export default Home;