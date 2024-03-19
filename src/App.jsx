import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LazyLoader from "./Components/Others/LazyLoader";
const Layout = lazy(() => import("./Components/Layout/Layout"));

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Suspense fallback={<LazyLoader />}>
            <Layout />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
