// PricingCard.tsx
import React from 'react';

interface PricingCardProps {
  plan: {
    id: string;
    planName: string;
    price: string;
    features: string[];
  };
  selected: boolean;
  handlePlanSelection: (planId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, selected, handlePlanSelection }) => {
  return (
    <label
      key={plan.id}
      className={`block border p-4 rounded-lg cursor-pointer ${
        selected ? 'border-blue-500' : 'border-gray-300'
      }`}
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
        <h2 className="text-xl font-semibold">{plan.planName}</h2>
        <p className="text-gray-600">{plan.price}</p>
      </div>
      <ul className="text-sm">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
    </label>
  );
};

export default PricingCard;
