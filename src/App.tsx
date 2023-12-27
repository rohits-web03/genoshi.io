import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingSection from './Components/Pricing/PricingSection';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/pricing" element={<PricingSection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
