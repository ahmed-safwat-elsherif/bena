import { useRef, useEffect, useState } from "react";

type ChildrenAsFunction<T> = ({
  targetRef,
  inViewPort,
}: {
  targetRef: React.Ref<T>;
  inViewPort: boolean;
}) => React.ReactNode;

type ElementInViewPortProps<T> = {
  children: React.ReactNode | ChildrenAsFunction<T>;
  runOnce?: boolean;
};

const ElementInViewPort = <T extends HTMLElement = HTMLDivElement>(
  props: ElementInViewPortProps<T>
) => {
  const { children, runOnce = true } = props;

  const targetRef = useRef<T>(null);
  const [inViewPort, setInViewPort] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (runOnce && inViewPort) return;

        setInViewPort(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, [inViewPort, runOnce]);

  if (typeof children === "function")
    return <>{children({ targetRef, inViewPort })}</>;

  return <>{children}</>;
};

export default ElementInViewPort;
