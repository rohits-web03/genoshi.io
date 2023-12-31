import React, { useState } from 'react';
import UserProfileDetails from '../Components/Profile/UserProfileDetails';
import AccountDetails from '../Components/Profile/AccountDetails';
import UsageMetrics from '../Components/Profile/UsageMetrics';
import RecentActivityFeed from '../Components/Profile/RecentActivityFeed';
import SavedGraphsList from '../Components/Profile/SavedGraphs';
import { savedGraphsData } from '../constants';
import GraphDetailsModal from '../Components/Profile/GraphDetailsPage';
import AccountSettingsModal from '../Components/Profile/AccountSettings';

const ProfileDashboard: React.FC = () => {
  const [isDetailsOpen,setIsDetailsOpen]=useState<boolean>(false);
  const [index,setIndex]=useState<number>(0);
  const [isAccOpen,setIsAccOpen]=useState<boolean>(false);
  const closeGraphDetailsModal=()=>{
    console.log("closing modal")
    setIsDetailsOpen(false);
    console.log("isDetailsOpen:",isDetailsOpen,"acc modal",isAccOpen)
  }
  const openGraphDetailsModal = (value: number) => {
    console.log("opening modal");
    setIndex(value);
    setIsDetailsOpen(true);
    console.log("isDetailsOpen:",isDetailsOpen,"acc modal",isAccOpen)
  };

  const closeAccSettingsModal=()=>{
    console.log("closing Acc modal")
    setIsAccOpen(false);
    console.log("isDetailsOpen:",isDetailsOpen,"acc modal",isAccOpen)
  }

  const openAccSettingsModal = () => {
    console.log("opening Acc modal");
    setIsAccOpen(true);
    console.log("isDetailsOpen:",isDetailsOpen,"acc modal",isAccOpen)
  };
  
  return (
      <div className="container mx-auto p-2 bg-[#e1e1e1] h-screen w-full">
        <div className='flex h-full gap-2'>
          <div className='flex flex-col w-[40%]'>
            <UserProfileDetails openAccSettings={openAccSettingsModal}/>
            <AccountDetails settings={false}/>
            <RecentActivityFeed />
          </div>
          <div className='flex flex-col items-center w-[60%]'>
            <div className='flex flex-col justify-center items-center md:w-full bg-white rounded-lg h-[70%] mx-1'>
              <h3 className="text-xl font-semibold mb-1 text-center">Saved Graphs</h3>
              <SavedGraphsList savedGraphs={savedGraphsData} openGraphDetails={openGraphDetailsModal} />
            </div>
            <div className='h-[30%] w-full'>
              <UsageMetrics />
            </div>
          </div>
        </div>
        {isDetailsOpen && (
        <GraphDetailsModal
          graphDetails={savedGraphsData[index]}
          closeGraphDetails={closeGraphDetailsModal}
          isGraphDetails={isDetailsOpen}
        />
      )}

      {isAccOpen && (
        <AccountSettingsModal
          closeAccSettings={closeAccSettingsModal}
          isAccSettings={isAccOpen}
        />
      )}
      </div>
  );
};

export default ProfileDashboard;
