import React,{useState,useEffect} from "react";

interface GraphDetails {
    id:number;
    title: string;
    description: string;
    dateCreated: string;
    papers:string[];
  }

interface EditModalProps{
    graphDetails:{
      id:number;
      title: string;
      description: string;
      dateCreated: string;
      papers:string[];
    };
    isEditing:boolean;
    closeEditModal:()=>void;
  }
  
const EditGraphModal:React.FC<EditModalProps>=({graphDetails,isEditing,closeEditModal})=>{
    const [updatedDetails, setUpdatedDetails] = useState<GraphDetails>({ ...graphDetails });
  
    useEffect(() => {
      setUpdatedDetails({ ...graphDetails });
    }, [graphDetails]);
  
  
    if(!isEditing) return null;
  
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
      alert("Changes Saved!!")
      // Logic to save changes (e.g., update data in backend)
      // Once saved, close the edit modal
      closeEditModal();
    };
  
      return (
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
              onClick={closeEditModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )
  }

  export default EditGraphModal;