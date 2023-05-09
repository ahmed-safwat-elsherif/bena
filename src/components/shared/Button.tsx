import React from "react";

import { ReactComponent as LeftArrowIcon } from "../../svg/icon-left-arrow.svg";

type ButtonProps = React.PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

const Button = ({ children, ...props }: ButtonProps) => {
  const { className, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`group flex min-w-[8rem] items-center justify-center space-x-2 rounded-full bg-white py-1 text-babyblue-dark shadow-md transition hover:bg-gray-100 active:bg-gray-200 rtl:space-x-reverse ${className}`}
    >
      <span>{children}</span>
      <LeftArrowIcon
        width={20}
        className="transition-[translate_0.3s_ease-out] group-hover:-translate-x-2 "
      />
    </button>
  );
};

export default Button;
