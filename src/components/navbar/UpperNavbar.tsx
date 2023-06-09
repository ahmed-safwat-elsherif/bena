import { ReactComponent as ArrowDownIcon } from "../../svg/icon-arrow-down.svg";

const UpperNavbar = () => {
  return (
    <nav className="container hidden justify-end space-x-3 text-[14px] rtl:space-x-reverse md:flex">
      <div className="text-babyblue-dark ">
        <span>اتصل بنا</span>
      </div>
      <div className="flex items-center space-x-1 text-babyblue-dark rtl:space-x-reverse">
        <span>العربية</span>
        <ArrowDownIcon width={10} />
      </div>
    </nav>
  );
};

export default UpperNavbar;
