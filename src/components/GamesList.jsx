const GamesList = ({ allGameList }) => {
  return (
    <>
      <h1 className="mt-5 font-bold text-[20px] md:text-[30px] dark:text-white">
        Top Rated Games
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {allGameList.map((item) => (
          <div
            key={item.id}
            className="bg-slate-500 pt-3 px-3 pb-12 rounded-lg cursor-pointer group"
          >
            <img
              src={item.background_image}
              alt={item.name}
              className="w-[100%] h-[80%] object-cover rounded-lg group-hover:scale-105 transition-all ease-in duration-300"
            />
            <h2 className="text-[18px] md:text[22px] font-semibold dark:text-white mt-2">
              {item.name}
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <h2 className="text-[16px] md:text-[19px] font-semibold dark:text-white">
                ⭐{item.rating}
              </h2>
              <h2 className="text-[16px] md:text-[19px] font-semibold dark:text-white">
                🔥{item.suggestions_count}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GamesList;
