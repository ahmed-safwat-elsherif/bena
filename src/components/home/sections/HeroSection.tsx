// import { ReactComponent as BoyWithPlane } from "../../svg/boy-with-plane.svg";
// import { ReactComponent as ArcDown } from "../../svg/arc-down.svg";
// import ElementInViewPort from "../shared/ElementInViewPort";
import Button from "../../shared/Button";
import ElementInViewPort from "../../shared/ElementInViewPort";

const HeroSection = () => {
  return (
    <ElementInViewPort>
      {({ targetRef, inViewPort }) => (
        <section ref={targetRef} className="relative">
          <div className="z-1 container relative flex min-h-[550px] flex-1 flex-col items-center justify-center space-y-[50px] md:items-stretch">
            <h1 className="flex flex-col text-[2rem] font-bold text-babyblue-dark sm:text-[2.5rem] md:text-[3.5rem]">
              <span
                className={`leading-[4rem] transition delay-100 duration-1000 ${
                  inViewPort
                    ? "sm:translate-x-0 sm:opacity-100"
                    : "sm:translate-x-10 sm:opacity-0"
                }`}
              >
                مبادرة بينا
              </span>
              <span
                className={`text-[1.1rem] transition delay-1000 duration-1000 sm:text-[1.3rem] md:text-[1.5rem] ${
                  inViewPort
                    ? "sm:translate-x-0 sm:opacity-100"
                    : "sm:-translate-x-10 sm:opacity-0"
                }`}
              >
                بـيـنـا بـكـرا احــلــى
              </span>
            </h1>
            <p
              className={`max max-w-lg text-center text-[1rem] transition-[opacity] delay-[2000ms] duration-1000 md:text-start ${
                inViewPort ? "sm:opacity-100" : "sm:opacity-0"
              }`}
            >
              هي مبادرة أطلقتها وزارة التضامن الإجتماعي لرفع وتحسين جودة الخدمات
              التي تقدمها مؤسسات الرعاية الإجتماعية من خلال متطوعين لتفعيل دور
              المسؤولية والمراقبة المجتمعية.
            </p>
            <div
              className={`transition-[opacity] delay-[2500ms] duration-1000 ${
                inViewPort ? "sm:opacity-100" : "sm:opacity-0"
              }`}
            >
              <Button>المزيد</Button>
            </div>
          </div>
          {/* <ElementInViewPort>
          {({ targetRef, inViewPort }) => (
            <div ref={targetRef} data-viewport={inViewPort}>
              <div
                className={`absolute transition-[left_ease-in-out] duration-1000 ${
                  inViewPort ? "left-0 opacity-100" : "-left-[9%] opacity-0"
                } top-0 z-0`}
              >
                <BoyWithPlane width="%100" />
              </div>
            </div>
          )}
        </ElementInViewPort> */}
        </section>
      )}
    </ElementInViewPort>
  );
};

export default HeroSection;
