import { ReactComponent as AppLogo } from "../../svg/app-logo.svg";

const MainNavbar = () => {
  return (
    <nav className="container flex items-center justify-between">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <AppLogo width={60} />
        <span className="text-[1.5rem] font-bold text-babyblue-dark">
          مبادرة بينا
        </span>
      </div>
      <ul className="flex flex-1 justify-center space-x-10 text-[1.1rem] text-babyblue-dark rtl:space-x-reverse">
        <li>عن المبادرة</li>
        <li>الاخبار</li>
        <li>قصة نجاح</li>
        <li>شاركنا </li>
      </ul>
      <div>
        <button className="rounded-full bg-babyblue-dark px-5 py-2 text-white ring-babyblue-darker transition hover:bg-babyblue-darker active:ring-2 active:ring-offset-1">
          تطوع معنا
        </button>
      </div>
    </nav>
  );
};

export default MainNavbar;
