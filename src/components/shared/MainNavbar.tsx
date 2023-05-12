import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../svg/app-logo.svg";
import translation from "../../assets/translation.json";
import Navlink from "./Navlink";

const navlinks = [
  {
    label: translation.aboutInitiation,
    to: "/about",
  },
  {
    label: translation.news,
    to: "/news",
  },
  {
    label: translation.successStory,
    to: "/success-story",
  },
  {
    label: translation.shareWithUs,
    to: "/share-with-us",
  },
];

const MainNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <nav className="container flex items-center justify-between">
      <Link to="/">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <AppLogo width={60} />
          <span className="text-[1.5rem] font-bold text-babyblue-dark">
            {translation.benaInitiation}
          </span>
        </div>
      </Link>
      <ul className="hidden flex-1 justify-center space-x-10 text-[1.1rem] text-babyblue-dark rtl:space-x-reverse md:flex">
        {navlinks.map(({ label, ...link }) => (
          <Navlink key={label} {...link}>
            {label}
          </Navlink>
        ))}
      </ul>
      <div className="block md:hidden">
        <button
          onClick={() => setOpenDrawer((prev) => !prev)}
          dir="ltr"
          className="space-y-2"
        >
          <div
            className={`block h-[2px] w-8 origin-center rounded-md bg-babyblue-darker transition duration-300 ${
              openDrawer ? "translate-y-[0.63rem] rotate-45" : "rotate-0"
            }`}
          ></div>
          <div
            className={`block h-[2px] w-8 rounded-md bg-babyblue-darker transition duration-300 ${
              openDrawer ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`block h-[2px] w-8 origin-center rounded-md bg-babyblue-darker transition duration-300 ${
              openDrawer ? "-translate-y-[0.63rem] -rotate-45" : "rotate-0"
            }`}
          ></div>
        </button>
      </div>
      <div className="hidden md:block">
        <button className="rounded-full bg-babyblue-dark px-5 py-2 text-white ring-babyblue-darker transition hover:bg-babyblue-darker active:ring-2 active:ring-offset-1">
          {translation.volunteerWithUs}
        </button>
      </div>
    </nav>
  );
};

export default MainNavbar;
