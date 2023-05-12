import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../svg/app-logo.svg";
import { ReactComponent as ArrowLeftIcon } from "../../svg/icon-arrow-left.svg";
import translation from "../../assets/translation.json";
import navlinks from "../../utils/navlinks";

type SideDrawerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideDrawer = (props: SideDrawerProps) => {
  const { open, setOpen } = props;

  useEffect(() => {
    if (open) {
      document.querySelector("body")?.classList.add("overflow-hidden");
    } else {
      document.querySelector("body")?.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <aside
      className={`fixed z-[1000] h-[100vh] w-[100vw] bg-white transition-[left] duration-1000 ${
        open ? "left-0" : "-left-[100vw]"
      }`}
    >
      <div className="flex h-[100%] flex-col pb-7">
        <div className="flex justify-center">
          <Link
            to="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <AppLogo className="w-[3rem]" />
            <span className="text-[1.5rem] font-bold text-babyblue-dark">
              {translation.benaInitiation}
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <button
            className="h-[4rem] w-[1.5rem] rounded-bl-md rounded-tl-md bg-babyblue-dark text-white"
            onClick={() => setOpen(false)}
          >
            <ArrowLeftIcon />
          </button>
          <ul className="flex flex-col items-center justify-center divide-y divide-babyblue-dark">
            {navlinks.map(({ label, ...link }) => (
              <li
                key={label}
                onClick={() => setOpen(false)}
                className="py-3 text-[1.5rem]"
              >
                <Link {...link}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-[1.5rem] w-[1.5rem]" />
        </div>
        <div className="container flex justify-end px-10 py-2">
          <span className="text-[1.1rem] font-bold">v1.25.0</span>
        </div>
      </div>
    </aside>
  );
};

export default SideDrawer;
