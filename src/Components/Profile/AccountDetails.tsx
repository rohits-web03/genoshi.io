import React from 'react';
import { plans } from '../../constants';
import { Link } from 'react-router-dom';

interface AccountDetailsProps{
  settings:boolean;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({settings}) => {
  const plan={...plans[1],status:"Active"};

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-2 dark:bg-[#4a4a4e] dark:text-white">
      <h2 className="text-2xl font-semibold mb-4">Subscription Details</h2>
      <div className="flex justify-between items-center">
        <p className="text-gray-700 dark:text-white">Current Plan:</p>
        <p className="text-gray-900 dark:text-white font-semibold">{plan.planName}</p>
      </div>
      <div className='flex justify-between mt-2'>
        <p className='text-gray-700 dark:text-white'>Features:</p>
        <div className=''>
          {plan.features.map((feature)=>(
            <p className='text-right' key={feature}>{feature}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-700 dark:text-white">Status:</p>
        <p className={`text-${plan.status === 'Active' ? 'green' : 'red'}-500 font-semibold`}>
          {plan.status}
        </p>
      </div>
      {settings &&
        <div className='flex gap-3 justify-center items-center'>
          <button className='rounded-lg text-white bg-blue-700 hover:bg-blue-500 p-2'>
            <Link to="/pricing">Change Plan</Link>
          </button>
          <button className='rounded-lg text-white bg-red-700 hover:bg-red-500 p-2'>
            Cancel Plan
          </button>
        </div> 
      }
    </div>
  );
};

export default AccountDetails;
