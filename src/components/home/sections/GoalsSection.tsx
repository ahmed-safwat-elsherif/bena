import { ReactComponent as SupportIcon } from "../../../svg/icon-support.svg";
import { ReactComponent as ResourcesIcon } from "../../../svg/icon-resources.svg";
import { ReactComponent as EncourageIcon } from "../../../svg/icon-encourage.svg";
import { ReactComponent as FlagIcon } from "../../../svg/icon-flag.svg";
import { ReactComponent as HomeIcon } from "../../../svg/icon-home.svg";
import Button from "../../shared/Button";
import ElementInViewPort from "../../shared/ElementInViewPort";
import GoalCard from "../goals/GoalCard";

const goals = [
  {
    icon: <HomeIcon width={50} />,
    description: "تطوير جودة الخدمات المقدمة في مؤسسات الرعاية الإجتماعية..",
    key: "HOME",
  },
  {
    icon: <FlagIcon width={50} />,
    description: " القضاء على كل صور الانتهاكات.",
    key: "FLAG",
  },
  {
    icon: <EncourageIcon width={50} />,
    description:
      "تشجيع المواطنين على التطوع من أجل دعم تطوير مؤسسات الرعاية المختلفة ورصد حالات الانتهاكات الموجودة بهذه المؤسسات وإبلاغ الوزارة بها.",
    key: "ENCOURAGE",
  },
  {
    icon: <ResourcesIcon width={50} />,
    description: "إدارة الموارد الاجتماعية بشكل فعال.",
    key: "RESOURCES",
  },
  {
    icon: <SupportIcon width={50} />,
    description:
      "تدعيم مفهوم المساءلة الإجتماعية بطريقة تتمتع بالنزاهة والشفافية.",
    key: "SUPPORT",
  },
];

const GoalsSection = () => {
  return (
    <section className="bg-babyblue-dark py-20">
      <div className="container">
        <div className="flex flex-col space-y-6 md:space-y-20">
          <ElementInViewPort>
            {({ targetRef, inViewPort }) => (
              <h3
                ref={targetRef}
                className={`flex flex-col items-center text-[2rem] font-medium text-white after:h-1 after:rounded-sm after:bg-white after:transition after:duration-300 after:content-[''] md:text-[2.5rem] ${
                  inViewPort ? "after:w-20" : "after:w-0"
                }`}
              >
                أهداف المبادرة
              </h3>
            )}
          </ElementInViewPort>
          <ElementInViewPort>
            {({ targetRef, inViewPort }) => (
              <div
                ref={targetRef}
                className="flex grow flex-col justify-center divide-x-0 text-white rtl:divide-x-reverse md:flex-row md:divide-x"
              >
                {goals.map((goal) => (
                  <GoalCard inViewPort={inViewPort} {...goal} />
                ))}
              </div>
            )}
          </ElementInViewPort>
          <ElementInViewPort>
            {({ targetRef, inViewPort }) => (
              <div
                ref={targetRef}
                className={`flex justify-center transition delay-500 duration-500 ${
                  inViewPort
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }`}
              >
                <Button>المزيد</Button>
              </div>
            )}
          </ElementInViewPort>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
