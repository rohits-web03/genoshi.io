import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex h-screen bg-gray-200 ${isSidebarOpen ? 'w-1/5' : 'w-16'} transition-all`}>
      {/* Hamburger Icon */}
      <div className="flex mt-8 justify-center w-16 cursor-pointer" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars text-2xl"></i>
      </div>

      {/* Sidebar Content */}
      {isSidebarOpen && (
        <div className="flex flex-col p-4 w-full">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <ul>
            <li className="mb-2">
              <Link to="/profile" className="text-blue-600 hover:underline">
                Profile Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/profile/new-graph" className="text-blue-600 hover:underline">
                Create New Graph
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/profile/graph_details" className="text-blue-600 hover:underline">
                Graph Details
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/profile/settings" className="text-blue-600 hover:underline">
                Account Settings
              </Link>
            </li>
            {/* Add more sidebar navigation links if needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

{/* <i className="fa-solid fa-bars"></i> */}
