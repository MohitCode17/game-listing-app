const Banner = ({ gameBanner }) => {
  return (
    <div className="relative">
      <div
        className="absolute bottom-0 p-5 bg-gradient-to-t 
        from-slate-900 to-transparent w-full"
      >
        <h1 className="text-[26px] md:text-[36px] text-white font-semibold mt-5">
          {gameBanner.name}
        </h1>
        <button className="bg-sky-900 p-2 rounded-lg text-white font-semibold hover:bg-sky-950 transition-all ease-in duration-300">
          Purchase now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        alt={gameBanner.name}
        className="md:h-[360px] w-full rounded-xl object-cover"
      />
    </div>
  );
};

export default Banner;
