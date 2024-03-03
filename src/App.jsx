import { Center, Heading } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = lazy(() => import("./Components/Layout/Layout"));

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Suspense
            fallback={
              <Center
                h={"100%"}
                minH={"100vh"}
              >
                <Heading
                  as="h1"
                  fontSize={"lg"}
                  fontFamily={"primary"}
                  opacity={"0.5"}
                >
                  abhishek.
                </Heading>
              </Center>
            }
          >
            <Layout />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
