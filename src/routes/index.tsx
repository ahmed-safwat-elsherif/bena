/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { RouteProps } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const About = React.lazy(() => import("../pages/About"));
const News = React.lazy(() => import("../pages/News"));
const SuccessStory = React.lazy(() => import("../pages/SuccessStory"));
const ShareWithUs = React.lazy(() => import("../pages/ShareWithUs"));

const routes: (RouteProps & { key: string })[] = [
  { key: "HOME", index: true, element: <Home /> },
  { key: "ABOUT", path: "about", element: <About /> },
  { key: "NEWS", path: "news", element: <News /> },
  { key: "SUCCESS_STORY", path: "success-story", element: <SuccessStory /> },
  { key: "SHARE_WITH_US", path: "share-with-us", element: <ShareWithUs /> },
  { key: "NOT_FOUND", path: "*", element: <NotFound /> },
];

export default routes;
