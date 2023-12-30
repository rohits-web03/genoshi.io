import React from 'react';

interface SavedGraph {
  id: number;
  title: string;
  dateCreated: string;
}

interface SavedGraphsProps {
  savedGraphs: SavedGraph[];
  openModal: (value: number) => void;
  graphIndex: number;
}


const SavedGraphsList: React.FC<SavedGraphsProps> = ({ savedGraphs,openModal,graphIndex }) => {
  return (
    <table className="space-y-4 w-full rounded-lg bg-white h-[90%] pb-0">
      <tbody className='p-4 pb-0'>
        <tr>
          <th>Title</th>
          <th>Date Created</th>
          <th>Actions</th>
        </tr>
        {savedGraphs.map((graph,index) => (
          <tr key={graph.id} className="border p-4 rounded-md shadow-md hover:bg-slate-200">
            <td className="text-lg mb-2 px-4">{graph.title}</td>
            <td className="text-gray-600 text-sm mb-2">{graph.dateCreated}</td>
            <td className='flex justify-center items-center gap-2 h-full'>
              <button className='rounded-lg text-white bg-black p-2' onClick={()=>openModal(index)} >
                More
              </button>
              <button className='rounded-lg text-white bg-green-500 p-2'>
                Share
              </button>
              <button className='rounded-lg text-white bg-red-500 p-2'>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SavedGraphsList;
