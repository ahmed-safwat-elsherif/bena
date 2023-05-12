import { Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../svg/app-logo.svg";
import translation from "../../assets/translation.json";
import HamburgerButton from "./HamburgerButton";
import Navlinks from "./Navlinks";

type MainNavbarProps = {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainNavbar = (props: MainNavbarProps) => {
  const { openDrawer, setOpenDrawer } = props;

  return (
    <nav className="container flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
        <AppLogo className="w-[3rem] md:w-[3.75rem]" />
        <span className="hidden text-[1.5rem] font-bold text-babyblue-dark sm:inline">
          {translation.benaInitiation}
        </span>
      </Link>
      <span className=" block text-[1.5rem] font-bold text-babyblue-dark sm:hidden">
        {translation.benaInitiation}
      </span>
      <Navlinks />
      <div className="flex items-center md:hidden">
        <HamburgerButton
          active={openDrawer}
          onClick={() => setOpenDrawer((prev) => !prev)}
        />
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
