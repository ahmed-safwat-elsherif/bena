import { useEffect, useRef } from "react";

import MainNavbar from "./MainNavbar";
import UpperNavbar from "./UpperNavbar";

const scrollThreshold = 30;

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleShadowOnScroll = () => {
      if (!navbarRef.current) return;

      if (window.scrollY > scrollThreshold) {
        navbarRef.current.classList.add("shadow-md");
      } else {
        navbarRef.current.classList.remove("shadow-md");
      }
    };
    window.addEventListener("scroll", handleShadowOnScroll);
    return () => window.removeEventListener("scroll", handleShadowOnScroll);
  }, []);

  return (
    <header
      ref={navbarRef}
      className="min-h-[30px] bg-babyblue-light py-3 transition-[0.3s_box-shadow_ease-out] sticky top-0"
    >
      <UpperNavbar />
      <MainNavbar />
    </header>
  );
};

export default Navbar;
