import React, { useEffect, useState } from "react";
import UnderActionLink from "../../Components/Actions/UnderActionLink";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import TextActionLink from "../../Components/Actions/TextActionLink";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    showMenu && window.addEventListener("click", () => setShowMenu(false));

    return () =>
      showMenu && window.removeEventListener("click", () => setShowMenu(false));
  }, [showMenu]);

  return (
    <header className="flex h-[8vh] border-b p-4 xl:px-0">
      <div className="mx-auto flex w-full max-w-[1280px] justify-between">
        <h1 className="font-semibold uppercase">reader's retreat</h1>
        <nav className="max-[400px]:hidden">
          <UnderActionLink actionText="Home" actionLink="/" />
          <UnderActionLink actionText="Students" actionLink="/students" />
          <UnderActionLink actionText="Books" actionLink="/books" />
        </nav>
        <nav className="relative min-[400px]:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu((prev) => !prev);
            }}
          >
            <MenuRoundedIcon />
          </button>
          {showMenu && (
            <div className="absolute right-0 flex flex-col rounded-md bg-50 p-1 shadow-customBoxShadow">
              <TextActionLink
                actionText="Home"
                actionLink="/"
                className="px-2 py-1"
              />
              <TextActionLink
                actionText="Students"
                actionLink="/students"
                className="px-2 py-1"
              />
              <TextActionLink
                actionText="Books"
                actionLink="/books"
                className="px-2 py-1"
              />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
