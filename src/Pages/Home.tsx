import { Link } from "react-router-dom";

const Home:React.FC = () => {
  return (
    <>
        <div className="flex flex-col justify-center font-inter items-center h-screen"> 
            <h1 className="text-7xl text-blue-500 mb-6">Genoshi's Technical Intern Test</h1>
            <h2></h2>
            <div className="text-2xl">
                <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mr-6"><Link to="/pricing">Pricing Page</Link></button>
                <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 mr-6"><Link to="/profile">Profile Pages</Link></button>
            </div>
        </div>
    </>
  )
}

export default Home;