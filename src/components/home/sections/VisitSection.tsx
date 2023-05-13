import Button from "../../shared/Button";
import ElementInViewPort from "../../shared/ElementInViewPort";

const VisitSection = () => {
  return (
    <section className="container">
      <div className="flex flex-col space-x-0 space-y-6 border-t border-babyblue-dark pt-[10rem] rtl:space-x-reverse md:flex-row md:space-x-3 md:space-y-0">
        <ElementInViewPort>
          {({ targetRef, inViewPort }) => (
            <>
              <div
                ref={targetRef}
                className={`flex min-h-[300px] flex-1 items-center justify-center border-2 border-babyblue-dark transition duration-500 ${
                  inViewPort ? "opacity-100" : "opacity-0"
                }`}
              >
                Image Placeholder
              </div>

              <div className="flex flex-1 flex-col">
                <h3
                  className={`mb-10 text-[1.5rem] font-bold text-babyblue-dark transition duration-500 ${
                    inViewPort
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  زيارة لعدد ٦٠ ابن وابنه من دور الرعاية الاجتماعية للمتحف
                  القومى للحضارات
                </h3>
                <div className="flex h-[100%] flex-col items-start justify-between space-y-5">
                  <div
                    className={`text-sm transition delay-300 duration-500 ${
                      inViewPort
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <p className="mb-4">
                      لدعم روح الانتماء للابناء وتعريفهم بأهم معالم واثار
                      بلدهم..
                    </p>
                    <p>
                      تم زيارة المتحف والتعرف على القطع الاثرية به ..كما تم دخول
                      صاله الموميات الملكية والتعرف على فترات حكمهم واهم
                      انجازاتهم و تم توزيع هدايا تذكارية للابناء مرتبطة بالحدث.
                      كما تم مراعاة الاجراءات الاحترازية التى تتخذها الدولة للحد
                      من انتشار فيروس كرونا
                    </p>
                  </div>
                  <span
                    className={`m transition delay-1000 duration-300 ${
                      inViewPort ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button>المزيد</Button>
                  </span>
                </div>
              </div>
            </>
          )}
        </ElementInViewPort>
      </div>
    </section>
  );
};

export default VisitSection;
