import { useEffect, useState } from "react";
import GameCategory from "../components/GameCategory";
import Api from "../services/Api";
import Banner from "../components/Banner";
import TrendingGame from "../components/TrendingGame";
import GamesList from "../components/GamesList";

const Home = () => {
  const [gamesList, setGamesList] = useState([]);

  const getGamesList = async () => {
    const { data } = await Api.getAllGames;
    setGamesList(data.results);
  };

  useEffect(() => {
    getGamesList();
  }, []);

  return (
    <div className="grid grid-cols-4 px-5 gap-4">
      <div className="hidden md:block">
        <GameCategory />
      </div>
      <div className="col-span-4 md:col-span-3">
        {/* Game Banner */}
        {gamesList.length > 0 && (
          <div className="mb-3">
            <Banner gameBanner={gamesList[8]} />
            <TrendingGame allGameList={gamesList} />
            <GamesList allGameList={gamesList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
