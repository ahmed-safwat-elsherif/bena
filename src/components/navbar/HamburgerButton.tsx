type HamburgerButtonProps = {
  active: boolean;
  onClick: () => void;
};

const HamburgerButton = (props: HamburgerButtonProps) => {
  const { active, onClick } = props;
  return (
    <button onClick={onClick} dir="ltr" className="space-y-2">
      <div
        className={`block h-[2px] w-8 origin-center rounded-md bg-babyblue-darker transition duration-300 ${
          active ? "translate-y-[0.63rem] rotate-45" : "rotate-0"
        }`}
      ></div>
      <div
        className={`block h-[2px] w-8 rounded-md bg-babyblue-darker transition duration-300 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`block h-[2px] w-8 origin-center rounded-md bg-babyblue-darker transition duration-300 ${
          active ? "-translate-y-[0.63rem] -rotate-45" : "rotate-0"
        }`}
      ></div>
    </button>
  );
};

export default HamburgerButton;
