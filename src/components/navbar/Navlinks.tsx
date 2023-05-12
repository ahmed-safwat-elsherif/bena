import navlinks from "../../utils/navlinks";
import Navlink from "./Navlink";

const Navlinks = () => {
  return (
    <ul className="hidden flex-1 justify-center space-x-10 text-[1.1rem] text-babyblue-dark rtl:space-x-reverse md:flex">
      {navlinks.map(({ label, ...link }) => (
        <Navlink key={label} {...link}>
          {label}
        </Navlink>
      ))}
    </ul>
  );
};

export default Navlinks;
