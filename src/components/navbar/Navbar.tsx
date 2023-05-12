import { useEffect, useRef, useState } from "react";

import MainNavbar from "./MainNavbar";
import UpperNavbar from "./UpperNavbar";
import SideDrawer from "./SideDrawer";

const scrollThreshold = 10;

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleShadowOnScroll = () => {
      if (!navbarRef.current) return;

      if (window.scrollY > scrollThreshold) {
        navbarRef.current.classList.add("shadow-md", "bg-white");
      } else {
        navbarRef.current.classList.remove("shadow-md", "bg-white");
      }
    };
    window.addEventListener("scroll", handleShadowOnScroll);
    return () => window.removeEventListener("scroll", handleShadowOnScroll);
  }, []);

  return (
    <>
      <header
        ref={navbarRef}
        className="sticky top-0 z-50 min-h-[30px] bg-babyblue-light transition duration-300 md:py-3"
      >
        <div>
          <UpperNavbar />
          <MainNavbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
      </header>
      <SideDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Navbar;
