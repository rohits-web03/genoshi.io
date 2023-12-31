import Graph from "../../assets/knowledgeGraph.png";

interface GraphPreviewProps{
    showGraph:boolean;
    closeGraph:()=>void;
}

const GraphPreview:React.FC<GraphPreviewProps> = ({showGraph,closeGraph}) => {

  return (
    <>
      {showGraph && (
        <div className='show-graph fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"'>
            <div className='bg-black rounded-lg shadow-lg p-4 relative'>
              <img 
                src={Graph}
                alt='Demo Knowledge Graph'
              />
              <button className='bg-white rounded-full absolute top-6 right-7' onClick={closeGraph}>
                <i className="fa-solid fa-x text-xl"></i>
              </button>
            </div>
        </div>
      )}
    </>
  )
}

export default GraphPreview