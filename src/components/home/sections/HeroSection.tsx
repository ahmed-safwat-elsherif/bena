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
          <div className="z-1 container relative flex min-h-[550px] flex-1 flex-col justify-center space-y-[50px]">
            <h1 className="flex flex-col text-[3.5rem] font-bold text-babyblue-dark">
              <span
                className={`leading-[4rem] transition delay-100 duration-1000 ${
                  inViewPort
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                مبادرة بينا
              </span>
              <span
                className={`text-[1.5rem] transition delay-[1000ms] duration-1000 ${
                  inViewPort
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                بـيـنـا بـكـرا احــلــى
              </span>
            </h1>
            <p className="max max-w-lg text-[1rem]">
              هي مبادرة أطلقتها وزارة التضامن الإجتماعي لرفع وتحسين جودة الخدمات
              التي تقدمها مؤسسات الرعاية الإجتماعية من خلال متطوعين لتفعيل دور
              المسؤولية والمراقبة المجتمعية.
            </p>
            <div>
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
