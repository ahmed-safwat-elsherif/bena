import { ReactComponent as Ministry } from "../../svg/ministry.svg";
import { ReactComponent as AppLogo } from "../../svg/app-logo-footer.svg";

const Footer = () => {
  return (
    <footer className="container mt-24">
      <div className="flex justify-between border-t-2 border-babyblue-dark pt-[3rem]">
        <div className="flex max-w-[350px] items-start space-x-2 rtl:space-x-reverse">
          <AppLogo />
          <p className="text-sm font-medium leading-7 text-babyblue-dark">
            هي مبادرة أطلقتها وزارة التضامن الإجتماعي تحت رعاية الرئيس عبد
            الفتاح السيسي لرفع وتحسين جودة الخدمات التي تقدمها مؤسسات الرعاية
            الإجتماعية
          </p>
        </div>
        <div className="flex flex-1 font-semibold">
          <ul className="flex flex-col items-start">
            <li>عن المبادرة</li>
            <li>أحدث الأخبار</li>
            <li>تطوع معنا</li>
            <li>قصص نجاح</li>
            <li>الأسئلة الشائعة</li>
          </ul>
          <ul className="flex flex-col items-start">
            <li>اتصل بنا</li>
            <li>تابعنا</li>
          </ul>
        </div>
        <div className="flex rtl:space-x-reverse ">
          <Ministry />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
