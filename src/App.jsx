import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/common/Topbar/Topbar";
import Navbar from "./components/common/Navbar";
import ProtectedRoute from "./utils/ProtectedRoute";
import ToastMessage from "./components/common/toast/Toast";

// Lazy-loaded pages
const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/aboutus"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const JobUniverse = React.lazy(() => import("./pages/jobuniverse"));
const JobDescription = React.lazy(() => import("./pages/jobdescription"));
const Faq = React.lazy(() => import("./pages/faq"));
const Payment = React.lazy(() => import("./pages/payments"));
const StaticPages = React.lazy(() => import("./pages/static"));
const MultiStepForm = React.lazy(() => import("./components/Registration/RegisterForm"));

const Student = React.lazy(() => import("./pages/Student"));
function App() {
  return (
    <Router>
      <Topbar />
      <div className="mt-8 sm:mt-13">
      <Navbar />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobuniverse" element={<JobUniverse />} />
          <Route path="/job-description" element={<JobDescription />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pricing" element={<Payment />} />
          <Route path="/static" element={<StaticPages />} />
          <Route path="/multistep-form" element={<MultiStepForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/multistep-form" element={<MultiStepForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<MultiStepForm />} />
            <Route path="/student-dashboard" element={<Student />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastMessage />
    </Router>
  );
}

export default App;
