import React from 'react';
import { Link } from 'react-router-dom';
import userLogo from "../../assets/user.png";

interface Props {
  openAccSettings: () => void;
}

const UserProfileDetails: React.FC<Props> = ({openAccSettings}) => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    profilePhoto: userLogo,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div className="flex flex-col justify-around items-center shadow-md rounded-lg p-6 md:w-full bg-white pb-2">
      <div className='flex justify-around items-center'>
        <div className="flex items-center justify-center  mr-6">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600 mt-1">{user.email}</p>
          <p className="text-gray-700 mt-1">{user.bio}</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 p-2 mt-4'>
        <div className='flex justify-center items-center gap-4'>
          <button className='rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2'><Link to="/profile/new-graph">New Graph</Link></button>
          <button 
            onClick={openAccSettings}
            className='flex justify-center items-center gap-1 rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2'
          >
            Settings
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <button className='rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2'>Upload Papers</button>
          <button className='rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2'>Favourites</button>
          <button className='rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2'>Collections</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetails;
