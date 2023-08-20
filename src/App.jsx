import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme}  ${
          theme === "dark" ? "bg-[#121212]" : null
        }`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
