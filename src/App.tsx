import { Suspense } from "react";
import LayoutProvider from "./providers/LayoutProvider";
import routes from "./routes";
import mapRoutes from "./utils/mapRoutes";
import { Routes } from "react-router-dom";
import LoaderScreen from "./components/shared/LoaderScreen";

function App() {
  return (
    <LayoutProvider>
      <Suspense fallback={<LoaderScreen />}>
        <Routes>{mapRoutes(routes)}</Routes>
      </Suspense>
    </LayoutProvider>
  );
}

export default App;
