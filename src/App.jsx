import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/common/Topbar/Topbar";
import Navbar from "./components/common/navbar";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/aboutus"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const JobUniverse = React.lazy(() => import("./pages/jobuniverse"));
const JobDescription = React.lazy(() => import("./pages/jobdescription"));
const Faq = React.lazy(() => import("./pages/faq"));
const Payment = React.lazy(() => import("./pages/payments"));
const StaticPages = React.lazy(() => import("./pages/static"));
const MultiStepForm = React.lazy(() => import('./components/Registration/RegisterForm'));
function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />

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
          path="/about"
          element={
            <React.Suspense fallback={<div>Loading About Us...</div>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<div>Loading Login...</div>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<div>Loading Register...</div>}>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="/job-description"
          element={
            <React.Suspense fallback={<div>Loading Register...</div>}>
              <JobDescription />
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
        <Route
          path="/pricing"
          element={
            <React.Suspense fallback={<div>Loading Home...</div>}>
              <Payment />
            </React.Suspense>
          }
        />
        <Route
          path="/static"
          element={
            <React.Suspense fallback={<div>Loading Home...</div>}>
              <StaticPages />
            </React.Suspense>
          }
        />
	 <Route
          path="/multistep-form"
          element={
            <React.Suspense fallback={<div>Loading Multi-Step Form...</div>}>
              <MultiStepForm />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
