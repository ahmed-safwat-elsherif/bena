import Button from "../../shared/Button";

const TheatreSection = () => {
  return (
    <section className="relative">
      <div className="z-1 container relative flex flex-1 flex-col items-center justify-center space-y-4 py-20 md:items-start md:space-y-[50px] md:py-40">
        <h1 className="flex flex-col text-[2rem] font-bold leading-[4rem] text-babyblue-dark sm:text-[2.5rem] md:text-[3.5rem]">
          فريق مسرح بينا
        </h1>
        <p className="max max-w-lg text-center text-[1rem] md:text-start">
          تكوين فريق مسرح بينا و تنفيذ العديد من العروض المسرحية من خلال أبناء
          دور الرعاية قام الاطفال بتنفيذ العديد من الأنشطة لتنمية مهاراتهم وعروض
          فنون تشكيلية وعروض تمثيلية و استعراضية و غنائية .
        </p>
        <div className="pt-14 md:pt-0">
          <Button>المزيد</Button>
        </div>
      </div>
    </section>
  );
};

export default TheatreSection;
