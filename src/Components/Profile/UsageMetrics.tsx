import React from 'react';

interface usageBox {
  parameter:string;
  value:number;
  icon:string;
}

const UsageBox: React.FC<usageBox>=({parameter,value,icon})=>(
  <div className="flex justify-center items-start gap-2 max-md:w-full w-[33.33%] h-[90%] rounded-md border-black border p-2 pl-4">
    <div className='flex justify-center items-center h-full'>
      <i className={`${icon} text-2xl`}></i>
    </div>
    <div className='flex flex-col justify-center items-start w-full h-full'>
      <p className="text-gray-900 font-semibold text-2xl">{value}</p>
      <p className="text-gray-700 text-lg">{parameter}</p>
    </div>
  </div>
)

const UsageMetrics: React.FC = () => {

  const usageData = {
    graphsCreated: 25,
    graphsShared: 10,
    papersCollected: 30,
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 h-full w-full m-1">
      <h2 className="text-2xl font-semibold mb-4">Usage Metrics</h2>
      <div className='flex justify-around w-full h-[80%] gap-2 max-sm:flex-col'>
        <UsageBox parameter='Graphs Created' value={usageData.graphsCreated} icon='fa-solid fa-chart-simple'/>
        <UsageBox parameter='Graphs Shared' value={usageData.graphsShared} icon="fa-solid fa-share-from-square"/>
        <UsageBox parameter='Papers Collected' value={usageData.papersCollected} icon='fa-solid fa-book-open'/>
      </div>
    </div>
  );
};

export default UsageMetrics;