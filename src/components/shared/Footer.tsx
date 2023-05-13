import { ReactComponent as Ministry } from "../../svg/ministry.svg";
import { ReactComponent as AppFooterLogo } from "../../svg/app-logo-footer.svg";

const Footer = () => {
  return (
    <footer className="container mt-24">
      <div className="mb-16 flex flex-col items-center justify-between space-y-10 border-t-2 border-babyblue-dark pt-14 md:flex-row md:items-start md:space-y-0">
        <div className="flex max-w-md flex-1 flex-col items-center space-x-2 rtl:space-x-reverse md:flex-row md:items-start">
          <div className="flex-1">
            <AppFooterLogo className="w-[4rem] md:w-[6.875rem]" />
          </div>
          <p className="text-center text-sm font-medium leading-7 text-babyblue-dark md:text-start">
            هي مبادرة أطلقتها وزارة التضامن الإجتماعي تحت رعاية الرئيس عبد
            الفتاح السيسي لرفع وتحسين جودة الخدمات التي تقدمها مؤسسات الرعاية
            الإجتماعية
          </p>
        </div>
        <div className="flex flex-1 justify-evenly space-x-10 font-semibold rtl:space-x-reverse md:space-x-0">
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
        <div className="flex items-end justify-center rtl:space-x-reverse">
          <Ministry />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
