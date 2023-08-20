const TrendingGame = ({ allGameList }) => {
  return (
    <div>
      <h1 className="hidden md:block mt-5 font-bold text-[30px] dark:text-white">
        Trending Games
      </h1>
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
        {allGameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={item.id}
                className="bg-slate-500 rounded-lg hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="h-[270px] object-cover rounded-t-lg"
                />
                <h1 className="text-[22px] font-semibold dark:text-white p-2 text-center">
                  {item.name}
                </h1>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TrendingGame;
