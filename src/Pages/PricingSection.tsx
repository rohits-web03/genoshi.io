import React, { useState } from 'react';
import PricingCard from '../Components/Pricing/PricingCard';
import { plans } from '../constants';

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>(''); 
  const [selectedPeriod, setSelectedPeriod] = useState<string>('monthly');

  const handlePeriodSelection = (period: string) => {
    setSelectedPeriod(period);
  };
  
  const handlePlanSelection = (planId: string) => {
    setSelectedPlan(planId);
    const element = document.getElementById(planId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUnselect=()=>{
    setSelectedPlan('')
  }

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#e1e1e1] font-inter">
      <div className="container mx-auto py-8 px-8 overflow-auto">
        <div className='flex flex-col justify-center items-center gap-4 my-4 text-center mb-10'>
            <span className='bg-blue-200 rounded-lg px-1 text-blue-700'>Pricing</span>
            <h1 className='text-4xl font-semibold '>Tailored Pricing Solutions</h1>
            <h3 className='text-lg'>Our services are designed to cater to your specific needs and goals</h3>
            <div className='flex justify-center items-center gap-2 p-2'>
              <button
                className={`text-md font-semibold ${selectedPeriod === 'monthly' ? 'bg-gray-400 rounded-lg px-2 py-1' : 'bg-white px-2 py-1 rounded-lg'}`}
                onClick={() => handlePeriodSelection('monthly')}
              >
                Monthly
              </button>
              <button
                className={`text-md font-semibold ${selectedPeriod === 'yearly' ? 'bg-gray-400 rounded-lg px-2 py-1' : 'bg-white px-2 py-1 rounded-lg'}`}
                onClick={() => handlePeriodSelection('yearly')}
              >
                Yearly
              </button>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className="flex max-sm:flex-col max-md:flex-wrap max-md:grow justify-center items-center gap-8 w-[80%]">
            {plans.map((plan) => (
              <div key={plan.id} className='h-[400px]'>
                <PricingCard
                  plan={plan}
                  selected={selectedPlan === plan.id}
                  timePeriod={selectedPeriod}
                  handlePlanSelection={handlePlanSelection}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center'>
          {selectedPlanData && (
            <div 
            id={selectedPlan}
            className="mt-8 p-10 border border-blue-500 rounded-lg shadow-lg 
            md:w-[40%] flex flex-col bg-white justify-center"
            >
              <div className='flex justify-between items-center text-2xl'>
                <h2 className="text-2xl font-semibold text-blue-500 mb-4">
                  Selected Plan: {selectedPlanData.planName}
                </h2>
                <button
                  onClick={handleUnselect}
                >
                  <i className="fa-solid fa-xmark bg-slate-600 rounded-full p-2 rotate-90"></i>
                </button>
              </div>
              <div className="text-gray-700">
                {selectedPeriod==="monthly"?
                <div className='flex gap-2 items-center'>
                  <p className="mb-2 text-2xl">{selectedPlanData.monthlyPrice}</p>
                  {selectedPlan!='enterprise'?
                    <p className="mb-2 text-xl">Per Month</p>
                    :null
                  }
                </div>
                  :
                <div className='flex gap-2 items-center'>
                  <p className="mb-2 text-2xl">{selectedPlanData.yearlyPrice}</p>
                  {selectedPlan!='enterprise'?
                    <p className="mb-2 text-xl">Per Year</p>
                    :null
                  }
                </div>
                }
                <ul>
                  {selectedPlanData.features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2 text-lg">
                      <svg
                        className="w-4 h-4 mr-2 fill-current text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <button className="mt-4 text-lg bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-[50%]">
                  Purchase Plan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
