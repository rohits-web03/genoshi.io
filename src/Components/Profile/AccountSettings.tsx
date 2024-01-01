import React, { useState,useEffect } from 'react';
import { usageStatistics } from '../../constants';
import userLogo from "../../assets/user.png";
import AccountDetails from './AccountDetails';

interface UserDetails {
  name: string;
  email: string;
  profilePhoto: string | null; 
  bio: string;
}

interface Props {
  closeAccSettings: () => void;
  isAccSettings:boolean;
}

const AccountSettingsModal: React.FC<Props> = ({closeAccSettings,isAccSettings}) => {
  const initialUserDetails: UserDetails = {
    name: 'John Doe',
    email: 'john@example.com',
    profilePhoto: userLogo,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };
  const [userDetails, setUserDetails] = useState<UserDetails>({ ...initialUserDetails });
  const [isEditing, setIsEditing] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(()=>{
    setTimeout(()=>{
      if(error!=''){
        setError('')
      }
      if(successMessage!=''){
        setSuccessMessage('')
      }
    },5000)
  },[error,successMessage])

  if(!isAccSettings) return null;

  const handleUpdateUserDetails = () => {
    // Logic to update user details (you can integrate API calls or update state directly)
    // Example: updateUserDetails(userDetails);
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    if ( newPassword === confirmNewPassword) {
      // Successful password change
      setChangePassword(false);
      setError('');
      setSuccessMessage('Password changed successfully!');
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } else {
      setError('Password change failed. New Password and Confirm Password should be same');
      setSuccessMessage('');
      setChangePassword(false)
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center font-inter bg-black bg-opacity-75 backdrop-blur-sm rounded-lg shadow-lg p-4">
      <div className="bg-white dark:bg-[#0c0c1c] dark:text-white p-4 rounded-xl h-fit md:w-[60%] lg:w-[50%] xl:w-[40%] relative">
        <h1 className="flex justify-center items-center text-3xl font-semibold mt-2">Account Settings</h1>
        <button className="bg-slate-300 text-white py-2 px-4 rounded-full mt-2 mr-2 absolute top-0 right-3" onClick={closeAccSettings}>
              <i className="fa-solid fa-xmark rotate-90 text-2xl text-black"></i>
        </button>
        <div className="p-6 text-lg pb-2 dark:bg-[#4a4a4e] dark:text-white dark:rounded-lg">
          <div className="flex justify-between">
            <p>Name:</p>
            {isEditing ? (
              <input
                type="text"
                value={userDetails.name}
                className="border rounded-md px-2 py-1 bg-gray-200 mb-2 dark:bg-[#3f3f41] dark:text-white"
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
            ) : (
              <p className="text-gray-800 dark:text-white mb-2">{userDetails.name}</p>
            )}
          </div>
          <div className="flex justify-between">
            <p>Email:</p>
            {isEditing ? (
              <input
                type="text"
                value={userDetails.email}
                className="border rounded-md px-2 py-1 bg-gray-200 dark:bg-[#3f3f41] dark:text-white"
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
            ) : (
              <p className="text-gray-800 dark:text-white mb-2">{userDetails.email}</p>
            )}
          </div>
          <div className='flex justify-center items-center'>
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
          </div>
          {isEditing ? (
            <div className="flex justify-center">
              <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mr-2" onClick={handleUpdateUserDetails}>
                Save Changes
              </button>
              <button className="bg-red-700 hover:bg-red-500 text-white py-2 px-4 rounded-lg mt-4" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mr-2" onClick={() => setIsEditing(true)}>
                Edit Details
              </button>
              <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" onClick={() => setChangePassword(true)}>
                Change Password
              </button>
            </div>
          )}
        </div>
        <div className='flex flex-col'>
          <AccountDetails settings={true}/>

        </div>

        {/* Change Password Modal */}
        {changePassword && (
          <div className="edit-modal-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="edit-modal bg-white dark:bg-[#0c0c1c] dark:text-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Change Password</h2>
              <label className="block mb-2" htmlFor="oldPassword">
                Old Password:
                <input
                  type="password"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="border rounded-md px-2 py-1 w-full dark:bg-[#3f3f41] dark:text-white"
                />
              </label>
              <label className="block mb-2" htmlFor="newPassword">
                New Password:
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border rounded-md px-2 py-1 w-full dark:bg-[#3f3f41] dark:text-white"
                />
              </label>
              <label className="block mb-2" htmlFor="confirmNewPassword">
                Confirm New Password:
                <input
                  type="password"
                  id="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="border rounded-md px-2 py-1 w-full dark:bg-[#3f3f41] dark:text-white"
                />
              </label>
              <button
                className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mr-2"
                onClick={handleChangePassword}
              >
                Continue
              </button>
              <button
                className="bg-red-700 hover:bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
                onClick={() => setChangePassword(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Usage Statistics */}
        <div className="mt-2 px-4 dark:bg-[#4a4a4e] dark:text-white dark:rounded-lg py-1">
          <h2 className="text-2xl font-semibold mb-4 flex flex-col justify-center items-start">Usage Statistics</h2>
          <div className='flex justify-between items-center'>
            <p>Total Usage:</p>
            <p>{usageStatistics.totalUsage}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p>Remaining Usage:</p>
            <p>{usageStatistics.remainingUsage}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p>Usage Percentage:</p>
            <p>{usageStatistics.usagePercentage}%</p>
          </div>
        </div>
            
            {/* Third-party Services */}
            <div className="mt-2 flex flex-col px-4 py-3 dark:bg-[#4a4a4e] dark:text-white dark:rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Link Third-party Services</h2>
              <div className='flex justify-center items-center gap-4'>
              <div className="flex justify-between items-center">
                  <button className="rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2">
                    <a href="#" className='flex justify-center items-center gap-1'>
                      <i className="fa-brands fa-google"></i>
                      Google
                    </a>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <button className="rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2">
                    <a href="#" className='flex justify-center items-center gap-1'>
                      <i className="fa-brands fa-github"></i>
                      Github
                    </a>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <button className="rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2">
                    <a href="#" className='flex justify-center items-center gap-1'>
                      <i className="fa-brands fa-square-x-twitter"></i>
                      Twitter
                    </a>
                  </button>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default AccountSettingsModal;
