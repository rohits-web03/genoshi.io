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

//Saved Graphs list to show the  list of saved graphs
export const savedGraphsData = [
  {
    id: 1,
    title: 'Graph 1',
    dateCreated: '2023-12-01',
    description: 'This is the first graph.',
    papers: ['Paper 1', 'Paper 2', 'Paper 3'],
  },
  {
    id: 2,
    title: 'Graph 2',
    dateCreated: '2023-12-05',
    description: 'This is the second graph.',
    papers: ['Paper 4', 'Paper 5'],
  },
  {
    id: 3,
    title: 'Graph 3',
    dateCreated: '2023-11-28',
    description: 'This is the third graph.',
    papers: ['Paper 6', 'Paper 7'],
  },
  {
    id: 4,
    title: 'Graph 4',
    dateCreated: '2023-11-30',
    description: 'This is the fourth graph.',
    papers: ['Paper 8', 'Paper 9', 'Paper 10'],
  },
  {
    id: 5,
    title: 'Graph 5',
    dateCreated: '2023-12-03',
    description: 'This is the fifth graph.',
    papers: ['Paper 11', 'Paper 12', 'Paper 13', 'Paper 14'],
  },
];

// Demo usage statistics
export const usageStatistics = {
    totalUsage: 500,
    remainingUsage: 200,
    usagePercentage: ((200 / 500) * 100).toFixed(2),
  };
