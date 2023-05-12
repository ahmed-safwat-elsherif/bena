import { PropsWithChildren } from "react";
import { Link, To } from "react-router-dom";

const Navlink = ({ children, to }: PropsWithChildren<{ to: To }>) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default Navlink;
