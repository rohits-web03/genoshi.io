import React from 'react';

interface PricingCardProps {
  plan: {
    id: string;
    planName: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: string[];
  };
  selected: boolean;
  timePeriod:string;
  handlePlanSelection: (planId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, selected, timePeriod, handlePlanSelection }) => {
  return (
    <label
      key={plan.id}
      className={`block border rounded-xl overflow-hidden shadow-md p-10 cursor-pointer bg-[#eeeded] transform transition-transform duration-300 h-full ${
        selected ? 'border-blue-500 transform scale-105' : 'border-gray-300'
      } hover:shadow-lg hover:scale-105`}
      onClick={() => handlePlanSelection(plan.id)}
    >
      <input
        type="radio"
        name="plan"
        value={plan.id}
        checked={selected}
        onChange={() => handlePlanSelection(plan.id)}
        className="hidden"
      />
      <div className="mb-4">
        <h2 className="text-3xl font-semibold mb-1">{plan.planName}</h2>
        {timePeriod==="monthly"?
        <div className='mb-4'>
          <p className="text-2xl font-semibold text-gray-900">{plan.monthlyPrice}</p>
          {plan.planName!='Enterprise Plan'?
            <div>
              <p className="text-xl text-gray-900">Per Month</p>
              <p className="text-lg text-gray-900">Per user</p>
            </div>
            :null
          }
        </div>:
        <div className='mb-4'>
          <p className="text-2xl font-semibold text-gray-900">{plan.yearlyPrice}</p>
          {plan.planName!='Enterprise Plan'?
            <div>
              <p className="text-xl text-gray-900">Per Year</p>
              <p className="text-lg text-gray-900">Per user</p>
            </div>
            :null
          }
        </div>
        }
        <ul className="text-sm">
          {plan.features.map((feature, index) => (
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
    </label>
  );
};

export default PricingCard;
