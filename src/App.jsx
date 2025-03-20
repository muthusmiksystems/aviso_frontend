import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home'));

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
      </Routes>
    </Router>
  );
}

export default App;
