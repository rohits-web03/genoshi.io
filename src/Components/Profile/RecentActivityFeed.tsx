import React from 'react';

interface Activity {
  description: string;
  timestamp: string;
}

const recentActivities: Activity[] = [
  { description: 'Created 2 graphs', timestamp: '2 hours ago' },
  { description: 'Uploaded 1 paper', timestamp: '4 hours ago' },
  { description: 'Shared a graph with user X', timestamp: '1 day ago' },
  { description: 'Saved 3 new papers', timestamp: '2 days ago' },
  { description: 'Edited graph settings', timestamp: '3 days ago' },
  { description: 'Made 5 queries', timestamp: '1 week ago' },
  { description: 'Deleted a graph', timestamp: '5 hours ago' },
  { description: 'Uploaded 2 papers', timestamp: '6 hours ago' },
  { description: 'Shared a graph with user Y', timestamp: '2 days ago' },
  { description: 'Saved 5 new papers', timestamp: '3 days ago' },
  { description: 'Edited paper details', timestamp: '4 days ago' },
  { description: 'Made 8 queries', timestamp: '1 week ago' },
  { description: 'Added a new collection', timestamp: '8 hours ago' },
  { description: 'Shared a collection', timestamp: '2 weeks ago' },
  { description: 'Updated user profile', timestamp: '3 weeks ago' },
];

const RecentActivityFeed: React.FC = () => {
  return (
    <div className="bg-white p-4 pt-6 h-[42%] rounded-md shadow mt-2 dark:bg-[#4a4a4e] dark:text-white">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <p className='text-right text-gray-800 dark:text-white'>With last 7 days</p>
      </div>
      <div className='p-4 bg-slate-100 overflow-y-auto h-[70%] rounded-lg max-sm:h-[85%] dark:bg-[#626264] dark:text-white'>
        {recentActivities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-2 hover:bg-slate-300 dark:hover:bg-[#49494c] rounded-lg">
            <p className="text-md">{activity.description}</p>
            <p className="text-sm text-gray-500 dark:text-white">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityFeed;
