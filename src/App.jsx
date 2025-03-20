import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home'));
const About =React.lazy(()=> import('./pages/aboutus'));
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
          path="/about"
          element={
            <React.Suspense fallback={<div>Loading aboutus...</div>}>
              <About />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
