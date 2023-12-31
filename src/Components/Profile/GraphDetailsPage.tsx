import React, { useState } from 'react';
import GraphPreview from './GraphPreview';
import EditGraphModal from './EditGraphModal';

interface GraphDetails {
  id:number;
  title: string;
  description: string;
  dateCreated: string;
  papers:string[];
}

interface Props {
  graphDetails: GraphDetails;
  closeGraphDetails: () => void;
  isGraphDetails:boolean;
}

const GraphDetailsModal: React.FC<Props> = ({ graphDetails, closeGraphDetails, isGraphDetails }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showGraph, setShowGraph] = useState<boolean>(false);

  if (!isGraphDetails) return null;

  const showEditModal = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  const handleShowGraph=()=>{
    setShowGraph(true);
  }

  const closeGraph=()=>{
    setShowGraph(false)
  }

  // console.log("Details:",graphDetails,"Updated Details:",updatedDetails)
  
  return (
    <div className="fixed inset-0 flex items-center justify-center font-inter bg-black bg-opacity-75 backdrop-blur-sm rounded-lg shadow-lg p-4">
      <div className="bg-white p-4 rounded-xl h-fit w-[50%] relative">
        <h1 className='flex justify-center items-center text-3xl font-semibold mt-2'>Graph Details</h1>
        <div className='p-6 text-lg pb-0'>
          <div className='flex justify-between'>
            <p>Title:</p>
            <p className="text-xl font-semibold mb-2 text-gray-800">{graphDetails.title}</p>
          </div>
          <div className='flex justify-between'>
            <p>Description:</p>
            <p className="text-gray-800 mb-2">{graphDetails.description}</p>
          </div>
          <div className='flex justify-between'>
            <p>Date Created:</p>
            <p className="text-gray-800 mb-2">Created on: {graphDetails.dateCreated}</p>
          </div>
          <div className='flex justify-between'>
            <p>Papers Used:</p>
            <div className='flex flex-col gap-1 justify-around items-center'>
              {graphDetails.papers.map((paper)=>(
                  <p className='text-gray-800 mb-1' key={paper}>{paper}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap pb-4'>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-500" onClick={handleShowGraph}>
            Show Graph
          </button>
          <div className='flex justify-center items-center gap-4'>
            <button className="bg-slate-300 text-white py-2 px-4 rounded-full mt-2 mr-2 absolute top-3 right-3" onClick={closeGraphDetails}>
              <i className="fa-solid fa-xmark rotate-90 text-2xl text-black"></i>
            </button>
            <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" onClick={showEditModal}>
              Edit
            </button>
            <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" onClick={()=>console.log(`Sharing ${graphDetails.title}`)}>
              Share
            </button>
            <button className="bg-red-700 hover:bg-red-500 text-white py-2 px-4 rounded-lg mt-4" onClick={()=>console.log(`Deleting ${graphDetails.title}`)}>
              Delete
            </button>
          </div>
        </div>
      </div>

      <EditGraphModal graphDetails={graphDetails} isEditing={isEditing} closeEditModal={closeEditModal}/>

      <GraphPreview showGraph={showGraph} closeGraph={closeGraph}/>
    </div>
  );
};

export default GraphDetailsModal;
