import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingSection from './Pages/PricingSection';
import ProfileDashboard from './Pages/ProfileDashboard';
import CreateNewGraph from './Pages/CreateNewGraph';
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route for Pricing Section */}
          <Route path="/pricing" element={<PricingSection />} />

          {/* Route for Profile Dashboard */}
          <Route path="/profile">
            <Route index element={<ProfileDashboard />} />
            <Route path="/profile/new-graph" element={<CreateNewGraph />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
