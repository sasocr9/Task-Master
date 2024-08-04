import { useState } from "react";
import Logo from "../assets/logo.png";
import { useEffect } from "react";

function Header() {
  const Themes = ["light", "medium", "dark", "gOne", "gTwo", "gThree"];
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="TaskMaster Logo" />
        <span>TaskMaster</span>
      </div>
      <div className="themeSelector">
        {Themes.map((Theme, index) => (
          <span
            className={theme === Theme ? `${Theme} activeTheme` : Theme}
            key={index}
            onClick={() => setTheme(Theme)}
          ></span>
        ))}
      </div>
    </header>
  );
}

export default Header;
