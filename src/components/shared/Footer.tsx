import { ReactComponent as Ministry } from "../../svg/ministry.svg";
import { ReactComponent as AppFooterLogo } from "../../svg/app-logo-footer.svg";

const Footer = () => {
  return (
    <footer className="container mt-24">
      <div className="mb-16 flex justify-between border-t-2 border-babyblue-dark pt-14">
        <div className="flex flex-1 items-start space-x-2 rtl:space-x-reverse">
          <div className="flex-1">
            <AppFooterLogo />
          </div>
          <p className="text-sm font-medium leading-7 text-babyblue-dark">
            هي مبادرة أطلقتها وزارة التضامن الإجتماعي تحت رعاية الرئيس عبد
            الفتاح السيسي لرفع وتحسين جودة الخدمات التي تقدمها مؤسسات الرعاية
            الإجتماعية
          </p>
        </div>
        <div className="flex flex-1 justify-evenly font-semibold">
          <ul className="flex flex-col items-start space-y-3">
            <li>عن المبادرة</li>
            <li>أحدث الأخبار</li>
            <li>تطوع معنا</li>
            <li>قصص نجاح</li>
            <li>الأسئلة الشائعة</li>
          </ul>
          <ul className="flex flex-col items-start space-y-3">
            <li>اتصل بنا</li>
            <li>تابعنا</li>
          </ul>
        </div>
        <div className="flex items-end rtl:space-x-reverse">
          <Ministry />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
