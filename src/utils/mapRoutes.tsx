import { RouteProps, Route } from "react-router-dom";

const mapRoutes = (routes: (RouteProps & { key: string })[]) =>
  routes.map((route) => <Route {...route} key={route.key} />);

export default mapRoutes;
