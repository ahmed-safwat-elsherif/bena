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
