import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Faq from "./pages/faq";

const Home = React.lazy(() => import("./pages/home"));
const JobUniverse = React.lazy(() => import("./pages/jobuniverse"));
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/jobuniverse"
          element={
            <React.Suspense fallback={<div>Loading Home...</div>}>
              <JobUniverse />
            </React.Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <React.Suspense fallback={<div>Loading Home...</div>}>
              <Faq />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
