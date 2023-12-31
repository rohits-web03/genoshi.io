import React from 'react';

interface SavedGraph {
  id: number;
  title: string;
  dateCreated: string;
}

interface SavedGraphsProps {
  savedGraphs: SavedGraph[];
  openGraphDetails: (value: number) => void;
}

const SavedGraphsList: React.FC<SavedGraphsProps> = ({ savedGraphs, openGraphDetails }) => {
  return (
    <div className="h-[90%] overflow-y-auto w-full">
      <table className="w-full rounded-lg bg-white mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savedGraphs.map((graph, index) => (
            <tr key={graph.id} className="border hover:bg-slate-200">
              <td className="text-lg p-4">{graph.title}</td>
              <td className="text-gray-600 text-sm p-4">{graph.dateCreated}</td>
              <td className="flex justify-center items-center gap-2 p-4">
                <button className="rounded-lg text-white bg-black p-2" onClick={() => openGraphDetails(index)}>
                  More
                </button>
                <button className="rounded-lg text-white bg-green-500 p-2">Share</button>
                <button className="rounded-lg text-white bg-red-500 p-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedGraphsList;
