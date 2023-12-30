import React, { useState } from 'react';
import { usageStatistics } from '../constants';
import userLogo from "../assets/user.png";
import AccountDetails from '../Components/Profile/AccountDetails';

interface UserDetails {
  name: string;
  email: string;
  profilePhoto: string | null; 
  bio: string;
}

interface Props {
  closeModal: () => void;
  isOpen:boolean;
}

const AccountSettingsModal: React.FC<Props> = ({closeModal,isOpen}) => {
  if(!isOpen) return null;
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
      setError('Password change failed. Please check your input.');
      setSuccessMessage('');
      setChangePassword(false)
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center font-inter bg-black bg-opacity-75 backdrop-blur-sm rounded-lg shadow-lg p-4">
      <div className="bg-white p-4 rounded-xl h-fit w-[60%] relative">
        <h1 className="flex justify-center items-center text-3xl font-semibold mt-2">Account Settings</h1>
        <button className="bg-slate-300 text-white py-2 px-4 rounded-full mt-2 mr-2 absolute top-3 right-3" onClick={closeModal}>
              <i className="fa-solid fa-xmark rotate-90 text-2xl text-black"></i>
        </button>
        <div className="p-6 text-lg pb-0">
          <div className="flex justify-between">
            <p>Name:</p>
            {isEditing ? (
              <input
                type="text"
                value={userDetails.name}
                className="border rounded-md px-2 py-1 bg-gray-200 mb-2"
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
            ) : (
              <p className="text-gray-800 mb-2">{userDetails.name}</p>
            )}
          </div>
          <div className="flex justify-between">
            <p>Email:</p>
            {isEditing ? (
              <input
                type="text"
                value={userDetails.email}
                className="border rounded-md px-2 py-1 bg-gray-200"
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
            ) : (
              <p className="text-gray-800 mb-2">{userDetails.email}</p>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {isEditing ? (
            <div className="flex justify-center">
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 mr-2" onClick={handleUpdateUserDetails}>
                Save Changes
              </button>
              <button className="bg-red-700 text-white py-2 px-4 rounded-lg mt-4" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 mr-2" onClick={() => setIsEditing(true)}>
                Edit Details
              </button>
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg mt-4" onClick={() => setChangePassword(true)}>
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
            <div className="edit-modal bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Change Password</h2>
              <label className="block mb-2" htmlFor="oldPassword">
                Old Password:
                <input
                  type="password"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="border rounded-md px-2 py-1 w-full"
                />
              </label>
              <label className="block mb-2" htmlFor="newPassword">
                New Password:
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="border rounded-md px-2 py-1 w-full"
                />
              </label>
              <label className="block mb-2" htmlFor="confirmNewPassword">
                Confirm New Password:
                <input
                  type="password"
                  id="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="border rounded-md px-2 py-1 w-full"
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
                   <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Usage Statistics</h2>
              <p>Total Usage: {usageStatistics.totalUsage}</p>
              <p>Remaining Usage: {usageStatistics.remainingUsage}</p>
              <p>Usage Percentage: {usageStatistics.usagePercentage}%</p>
            </div>
            
            {/* Third-party Services */}
            <div className="mt-6 flex flex-col">
              <h2 className="text-2xl font-semibold mb-4">Link Third-party Services</h2>
              <div className='flex justify-center items-center gap-4'>
              <div className="flex justify-between items-center">
                  <button className="rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2">
                    <a href="#">Google</a>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <button className="rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2">
                    <a href="#">Github</a>
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <button className="rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2">
                    <a href="#">Twitter</a>
                  </button>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default AccountSettingsModal;
