import React, { useState } from 'react';
import UserProfileDetails from '../Components/Profile/UserProfileDetails';
import AccountDetails from '../Components/Profile/AccountDetails';
import UsageMetrics from '../Components/Profile/UsageMetrics';
import RecentActivityFeed from '../Components/Profile/RecentActivityFeed';
import SavedGraphsList from '../Components/Profile/SavedGraphs';
import { savedGraphsData } from '../constants';
import GraphDetailsModal from './GraphDetailsPage';
import AccountSettingsModal from './AccountSettings';

const ProfileDashboard: React.FC = () => {
  const [isOpen,setItOpen]=useState<boolean>(false);
  const [index,setIndex]=useState<number>(0);
  const [accModal,setAccModal]=useState<boolean>(false);
  const closeModal=()=>{
    console.log("closing modal")
      setItOpen(false);
  }
  const openModal = (value: number) => {
    console.log("opening modal");
    setIndex(value);
    setAccModal(true);
  };

  const closeAccModal=()=>{
    console.log("closing Acc modal")
      setAccModal(false);
  }
  const openAccModal = () => {
    console.log("opening Acc modal");
    setAccModal(true);
  };
  
  return (
      <div className="container mx-auto p-2 bg-[#e1e1e1] h-screen w-full">
        <div className='flex h-full gap-2'>
          <div className='flex flex-col w-[40%]'>
            <UserProfileDetails openModal={openAccModal}/>
            <AccountDetails settings={false}/>
            <RecentActivityFeed />
          </div>
          <div className='flex flex-col items-center w-[60%]'>
            <div className='flex flex-col justify-center items-center md:w-full bg-white rounded-lg h-[70%] mx-1'>
              <h3 className="text-xl font-semibold mb-1 text-center">Saved Graphs</h3>
              <SavedGraphsList savedGraphs={savedGraphsData} openModal={openModal} />
            </div>
            <div className='h-[30%] w-full'>
              <UsageMetrics />
            </div>
          </div>
        </div>
        {isOpen && (
        <GraphDetailsModal
          graphDetails={savedGraphsData[index]}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      )}

      {accModal && (
        <AccountSettingsModal
          closeModal={closeAccModal}
          isOpen={accModal}
        />
      )}
      </div>
  );
};

export default ProfileDashboard;
