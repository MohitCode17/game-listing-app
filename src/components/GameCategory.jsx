import { useEffect, useState } from "react";
import Api from "../services/Api";

const GameCategory = () => {
  const [genres, setGenres] = useState([]);
  const [acitveCategory, setActiveCategory] = useState(0);

  // Get Genres of Application
  const getGenres = async () => {
    const { data } = await Api.getGenreList;
    setGenres(data.results);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <>
      <h1 className="text-[24px] font-bold mb-3 dark:text-white">
        Top Categories
      </h1>
      {genres.map((item, index) => (
        <div
          key={item.id}
          onClick={() => setActiveCategory(index)}
          className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg group hover:bg-slate-200 hover:font-bold dark:text-gray-200 hover:dark:text-gray-800 
          ${
            acitveCategory === index
              ? "bg-slate-200 font-bold dark:text-gray-800"
              : null
          } `}
        >
          <img
            src={item.image_background}
            alt={item.name}
            className="w-[50px] h-[50px] object-cover rounded-md group-hover:scale-110 transition-all ease-in duration-300"
          />
          <h1 className="text-[20px]">{item.name}</h1>
        </div>
      ))}
    </>
  );
};

export default GameCategory;
