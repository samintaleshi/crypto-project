import React from "react";
import CoinSrearch from "../components/CoinSrearch";
import Trending from "../components/Trending";

function Home({ coins }) {
  
  return (
    <div>
      <CoinSrearch coins={coins}></CoinSrearch>
      <Trending />
    </div>
  );
}

export default Home;
