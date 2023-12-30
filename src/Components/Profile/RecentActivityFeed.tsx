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
];

const RecentActivityFeed: React.FC = () => {
  return (
    <div className="bg-white p-4 pt-6 rounded-md shadow h-full mt-2">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <p className='text-right text-gray-800'>With last 7 days</p>
      </div>
      <div className='p-4 mt-2 bg-slate-100'>
        {recentActivities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-2 hover:bg-slate-300 rounded-lg">
            <p className="text-md">{activity.description}</p>
            <p className="text-sm text-gray-500">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityFeed;
