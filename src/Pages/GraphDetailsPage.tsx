import React, { useState, useEffect } from 'react';

interface GraphDetails {
  id:number;
  title: string;
  description: string;
  dateCreated: string;
  papers:string[];
}

interface Props {
  graphDetails: GraphDetails;
  closeModal: () => void;
  isOpen:boolean;
}

const GraphDetailsModal: React.FC<Props> = ({ graphDetails, closeModal, isOpen }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState<GraphDetails>({ ...graphDetails });

  useEffect(() => {
    setUpdatedDetails({ ...graphDetails });
  }, [graphDetails]);

  if (!isOpen) return null;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaperChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedPapers = [...(updatedDetails?.papers || [])];
    updatedPapers[index] = event.target.value;

    setUpdatedDetails((prevState) => ({
      ...(prevState || {}),
      papers: updatedPapers,
    }));
  };

  const handleSaveChanges = () => {
    // Logic to save changes (e.g., update data in backend)
    // Once saved, close the edit modal
    setIsEditing(false);
  };

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
            <p>Papers Shown:</p>
            <div className='flex flex-col gap-1 justify-around items-center'>
              {graphDetails.papers.map((paper)=>(
                  <p className='text-gray-800 mb-1' key={paper}>{paper}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap pb-4'>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-500" onClick={handleEditClick}>
            Show Graph
          </button>
          <div className='flex justify-center items-center gap-4'>
            <button className="bg-slate-300 text-white py-2 px-4 rounded-full mt-2 mr-2 absolute top-3 right-3" onClick={closeModal}>
              <i className="fa-solid fa-xmark rotate-90 text-2xl text-black"></i>
            </button>
            <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" onClick={handleEditClick}>
              Edit
            </button>
            <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" onClick={handleEditClick}>
              Share
            </button>
            <button className="bg-red-700 hover:bg-red-500 text-white py-2 px-4 rounded-lg mt-4" onClick={handleEditClick}>
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="edit-modal-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="edit-modal bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Edit Graph</h2>
            <label className="block mb-2" htmlFor="title">
              Title:
              <input
                type="text"
                id="title"
                name="title"
                value={updatedDetails.title}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1 w-full"
              />
            </label>
            <label className="block mb-2" htmlFor="description">
              Description:
              <input
                type="text"
                id="description"
                name="description"
                value={updatedDetails.description}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1 w-full"
              />
            </label>
            <label className="block mb-2" htmlFor="date_created">
              Date Created:
              <input
                type="text"
                id="date_created"
                name="dateCreated"
                value={updatedDetails.dateCreated}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1 w-full"
              />
            </label>
              <label className="block mb-2" htmlFor="papers">
                Papers:
                {updatedDetails.papers.map((paper, i) => (
                  <input
                    type="text"
                    key={i}
                    value={paper}
                    onChange={(e) => handlePaperChange(e, i)}
                    className="border rounded-md px-2 py-1 w-full mb-2"
                  />
                ))}
              </label>
            
            <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mr-2" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button
              className="bg-red-700 hover:bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphDetailsModal;
