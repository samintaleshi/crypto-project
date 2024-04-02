import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((res) => {
      setTrending(res.data.coins);
    });
  }, []);
  return (
    <div className="rounded-div my-12 py-8 text-primary ">
      <h1 className="text-2xl py-4 font-bold">Trending Coins</h1>
      {trending.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trending.map((coin, idx) => (
            <div
              key={idx}
              className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex">
                  <img
                    className="mr-4 rounded-full"
                    src={coin.item.small}
                    alt="/"
                  />
                  <div>
                    <p className="font-bold">{coin.item.name}</p>
                    <p>{coin.item.symbol}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-4 mr-2"
                    src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                    alt="/"
                  />
                  <p>
                    {coin.item.price_btc.toFixed(7)} <span>BTC</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Skeleton count={7} height={10} />
      )}
    </div>
  );
};

export default Trending;

