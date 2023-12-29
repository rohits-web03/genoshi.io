  // Pricing plans data
export const plans = [
    {
      id: 'basic',
      planName: 'Basic Plan',
      monthlyPrice: '$4',   //per month per user 
      yearlyPrice:'$48',   //$4 per month * 12=$48/year/user
      features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
    },
    {
      id: 'pro',
      planName: 'Pro Plan',
      price: '$8/month/user',
      monthlyPrice: '$8',   //per month per user 
      yearlyPrice:'$96',   //$8 per month * 12=$96/year/user
      features: [
        'Up to 50 graphs',
        'Up to 1000 chatbot queries',
        'Email + live chat support',
      ],
    },
    {
      id: 'enterprise',
      planName: 'Enterprise Plan',
      monthlyPrice: 'Contact for price',
      yearlyPrice: 'Contact for price',
      features: [
        'Unlimited graphs',
        'Ability to upload custom PDFs',
        '24/7 phone + email support',
      ],
    },
  ];