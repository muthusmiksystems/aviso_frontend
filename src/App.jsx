import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home'));
const JobUniverse = React.lazy(()=> import('./pages/jobuniverse'))
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
      </Routes>
    </Router>
  );
}

export default App;
