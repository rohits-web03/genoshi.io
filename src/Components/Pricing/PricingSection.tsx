import React, { useState } from 'react';
import PricingCard from './PricingCard';
import { plans } from '../../constants';

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>(''); 
  const [selectedPeriod, setSelectedPeriod] = useState<string>('monthly');

  const handlePeriodSelection = (period: string) => {
    setSelectedPeriod(period);
  };
  
  const handlePlanSelection = (planId: string) => {
    setSelectedPlan(planId);
  };

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="container mx-auto py-8 px-16">
      <div className='flex flex-col justify-center items-center gap-1 my-4 text-center'>
          <span className='bg-blue-200 rounded-lg px-1 text-blue-700'>Pricing</span>
          <h1 className='text-4xl font-semibold '>Tailored Pricing Solutions</h1>
          <h3 className='text-lg'>Our services are designed to cater to your specific needs and goals</h3>
          <div className='flex justify-center items-center gap-2 p-2'>
            <button
              className={`text-md font-semibold ${selectedPeriod === 'monthly' ? 'bg-gray-300 rounded-lg px-2 py-1' : 'bg-gray-100 px-2 py-1 rounded-lg'}`}
              onClick={() => handlePeriodSelection('monthly')}
            >
              Monthly
            </button>
            <button
              className={`text-md font-semibold ${selectedPeriod === 'yearly' ? 'bg-gray-300 rounded-lg px-2 py-1' : 'bg-gray-100 px-2 py-1 rounded-lg'}`}
              onClick={() => handlePeriodSelection('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              selected={selectedPlan === plan.id}
              handlePlanSelection={handlePlanSelection}
            />
          ))}
        </div>

        {selectedPlanData && (
          <div className="mt-8 p-6 border border-blue-500 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">
              Selected Plan: {selectedPlanData.planName}
            </h2>
            <div className="text-gray-700">
              <p className="mb-2">{selectedPlanData.price}</p>
              <ul>
                {selectedPlanData.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
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
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Purchase Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSection;
