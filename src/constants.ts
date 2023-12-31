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
    id: 16,
    title: 'Insightful Data Analysis',
    dateCreated: '2023-12-28',
    description: 'This is the sixteenth graph.',
    papers: ['Paper 41', 'Paper 42'],
  },
  {
    id: 17,
    title: 'Visual Data Insight',
    dateCreated: '2023-12-30',
    description: 'This is the seventeenth graph.',
    papers: ['Paper 43', 'Paper 44', 'Paper 45'],
  },
  {
    id: 18,
    title: 'Data Exploration Master',
    dateCreated: '2024-01-02',
    description: 'This is the eighteenth graph.',
    papers: ['Paper 46', 'Paper 47', 'Paper 48'],
  },
  {
    id: 19,
    title: 'Advanced Graph Analytics',
    dateCreated: '2024-01-04',
    description: 'This is the nineteenth graph.',
    papers: ['Paper 49', 'Paper 50'],
  },
  {
    id: 20,
    title: 'Innovative Visualization',
    dateCreated: '2024-01-06',
    description: 'This is the twentieth graph.',
    papers: ['Paper 51', 'Paper 52', 'Paper 53'],
  },
  {
    id: 6,
    title: 'Fantastic Graph',
    dateCreated: '2023-12-08',
    description: 'This is the sixth graph.',
    papers: ['Paper 15', 'Paper 16', 'Paper 17'],
  },
  {
    id: 7,
    title: 'Awesome Visualization',
    dateCreated: '2023-12-10',
    description: 'This is the seventh graph.',
    papers: ['Paper 18', 'Paper 19', 'Paper 20'],
  },
  {
    id: 8,
    title: 'Data Insight Graph',
    dateCreated: '2023-12-12',
    description: 'This is the eighth graph.',
    papers: ['Paper 21', 'Paper 22'],
  },
  {
    id: 9,
    title: 'Graph Masterpiece',
    dateCreated: '2023-12-14',
    description: 'This is the ninth graph.',
    papers: ['Paper 23', 'Paper 24', 'Paper 25'],
  },
  {
    id: 10,
    title: 'Insightful Data Visualization',
    dateCreated: '2023-12-16',
    description: 'This is the tenth graph.',
    papers: ['Paper 26', 'Paper 27'],
  },
  {
    id: 11,
    title: 'Advanced Chart Analysis',
    dateCreated: '2023-12-18',
    description: 'This is the eleventh graph.',
    papers: ['Paper 28', 'Paper 29', 'Paper 30'],
  },
  {
    id: 12,
    title: 'Innovative Data Graph',
    dateCreated: '2023-12-20',
    description: 'This is the twelfth graph.',
    papers: ['Paper 31', 'Paper 32'],
  },
  {
    id: 13,
    title: 'Insight Generator',
    dateCreated: '2023-12-22',
    description: 'This is the thirteenth graph.',
    papers: ['Paper 33', 'Paper 34', 'Paper 35'],
  },
  {
    id: 14,
    title: 'Visualization Wizardry',
    dateCreated: '2023-12-24',
    description: 'This is the fourteenth graph.',
    papers: ['Paper 36', 'Paper 37'],
  },
  {
    id: 15,
    title: 'Data Master Graph',
    dateCreated: '2023-12-26',
    description: 'This is the fifteenth graph.',
    papers: ['Paper 38', 'Paper 39', 'Paper 40'],
  },
];

// Demo usage statistics
export const usageStatistics = {
    totalUsage: 500,
    remainingUsage: 200,
    usagePercentage: ((200 / 500) * 100).toFixed(2),
  };
