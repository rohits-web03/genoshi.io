import React,{useState} from 'react';
import GraphPreview from '../Components/Profile/GraphPreview';

const CreateNewGraph: React.FC = () => {
  const [showGraph, setShowGraph] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target)
    alert("Graph Created")
    // e.preventDefault();
    // Logic for handling form submission goes here
  };

  const handleShowGraph=()=>{
    setShowGraph(true);
  }

  const closeGraph=()=>{
    setShowGraph(false)
  }

  return (
    <div className="container mx-auto py-8 h-screen flex flex-col justify-center gap-10 ">
      <div className="flex justify-center items-center p-6">
        <h1 className="text-4xl font-bold mb-6 font-inter max-sm:mb-0">Craft Your Insights: Create Graphs with Graff</h1>
      </div>
      <div className="flex justify-center items-center w-full max-sm:h-[80%] max-sm:mb-8">
        <form className="w-[80%] bg-gray-100 p-8 rounded-lg shadow-md max-sm:h-full" onSubmit={handleSubmit}>
          <div className='flex justify-center items-center max-sm:flex-col-reverse max-sm:gap-4 gap-8 w-full h-full '>
            <div className="max-sm:relative bottom-0 mb-4 max-sm:mb-0 h-[20rem] max-sm:h-[6.5rem] w-[30%] max-sm:w-full
             bg-slate-300 p-4 rounded-xl flex flex-col justify-center items-center">
              <label htmlFor="fileUpload" className="text-gray-700 font-bold mb-2">
                Upload Papers
              </label>
              <input
                type="file"
                id="fileUpload"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className='h-[90%] w-[60%] max-sm:h-[90%] max-sm:w-full'>
              <div className="mb-4 max-sm:w-full">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                Graph Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter title..."
                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter description..."
                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                rows={4}
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="papers" className="block text-gray-700 font-bold mb-2">
                Select Papers
              </label>
              <select
                id="papers"
                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="">Select papers...</option>
                <option value="paper1">Paper 1</option>
                <option value="paper2">Paper 2</option>
                <option value="paper3">Paper 3</option>
                <option value="paper4">Paper 4</option>
                <option value="paper5">Paper 5</option>
                <option value="paper6">Paper 6</option>
              </select>
            </div>
            <div className='flex justify-between items-center w-full'>
              <div className="mb-4 w-[40%]">
                <label htmlFor="papers" className="block text-gray-700 font-bold mb-2">
                  Choose Layout
                </label>
                <select
                  id="papers"
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                >
                  <option value="">Choose layout</option>
                  <option value="grid">Grid Layout</option>
                  <option value="circular">Circular Layout</option>
                  <option value="tree">Tree Layout</option>
                  <option value="force-directed">Force-Directed Layout</option>
                  <option value="hierarchical">Hierarchical Layout</option>
                  <option value="layered">Layered Layout</option>
                </select>
              </div>
              <div className="mb-4 w-[40%]">
                <label htmlFor="papers" className="block text-gray-700 font-bold mb-2">
                  Choose Color
                </label>
                <select
                  id="papers"
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                >
                  <option value="">Choose color</option>
                  <option value="blue">Blue Theme</option>
                  <option value="green">Green Theme</option>
                  <option value="red">Red Theme</option>
                  <option value="purple">Purple Theme</option>
                  <option value="orange">Orange Theme</option>
                  <option value="teal">Teal Theme</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end items-center gap-6">
              <div
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleShowGraph}
              >
                Show Priview
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Graph
              </button>
            </div>
            </div>
          </div>
        </form>
      </div>
      <GraphPreview showGraph={showGraph} closeGraph={closeGraph}/>
    </div>
  );
};

export default CreateNewGraph;
