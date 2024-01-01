import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingSection from './Pages/PricingSection';
import ProfileDashboard from './Pages/ProfileDashboard';
import CreateNewGraph from './Pages/CreateNewGraph';
import Home from "./Pages/Home";
import { themeContext } from './Contexts/theme';

const App: React.FC = () => {
  const [theme,setTheme]=useState<string>('');
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      console.log("effect")
      setTheme('dark');
    } else{
      console.log("effectelse")
      setTheme('light');
    }
  },[])

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    console.log('Current theme:', theme);
    document.querySelector('html')?.classList.remove('dark', 'light');
    if (theme) {
      document.querySelector('html')?.classList.add(theme);
    }
  }, [theme]);
  

  return (
    <div className='dark:bg-[#0c0c1c]'>
    <Router>
      <themeContext.Provider value={{theme,toggleTheme}}>
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
        </themeContext.Provider>
    </Router>
    </div>
  );
};

export default App;
