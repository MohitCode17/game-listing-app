import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="flex items-center p-3">
      <img src={logo} alt="game-logo" width={60} height={60} />
      <div className="flex items-center bg-slate-100 w-full p-2 mx-5 rounded-full">
        <HiSearch className="text-xl mx-2" />
        <input
          type="text"
          placeholder="search here..."
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div>
        {theme === "light" ? (
          <BsFillMoonFill
            className="bg-slate-100 p-1 rounded-full text-[28px] cursor-pointer"
            onClick={() => {setTheme("dark"); localStorage.setItem("theme", "dark")}}
          />
        ) : (
          <BsFillSunFill
            className="bg-slate-100 p-1 rounded-full text-[28px] cursor-pointer"
            onClick={() => {setTheme("light"); localStorage.setItem("theme", "light")}}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
