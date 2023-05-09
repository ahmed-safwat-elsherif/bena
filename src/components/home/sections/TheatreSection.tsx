import Button from "../../shared/Button";

const TheatreSection = () => {
  return (
    <section className="relative">
      <div className="z-1 container relative flex min-h-[550px] flex-1 flex-col justify-center space-y-[50px]">
        <h1 className="flex flex-col text-[3.5rem] font-bold leading-[4rem] text-babyblue-dark">
          فريق مسرح بينا
        </h1>
        <p className="max max-w-lg text-[1rem]">
          تكوين فريق مسرح بينا و تنفيذ العديد من العروض المسرحية من خلال أبناء
          دور الرعاية قام الاطفال بتنفيذ العديد من الأنشطة لتنمية مهاراتهم وعروض
          فنون تشكيلية وعروض تمثيلية و استعراضية و غنائية .
        </p>
        <div>
          <Button>المزيد</Button>
        </div>
      </div>
    </section>
  );
};

export default TheatreSection;
