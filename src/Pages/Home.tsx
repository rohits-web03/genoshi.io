import { Link } from "react-router-dom";

const Home:React.FC = () => {
  return (
    <>
        <div className="flex flex-col justify-center font-inter items-center h-screen p-4 dark:bg-[#0c0c1c] dark:text-white"> 
            <h1 className="text-7xl text-blue-500 mb-6 px-4">Genoshi's Technical Intern Test</h1>
            <div className="text-2xl flex justify-center items-center px-4">
                <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg my-4 mx-6"><Link to="/pricing">Pricing Page</Link></button>
                <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded-lg my-4 mx-6"><Link to="/profile">Profile Pages</Link></button>
            </div>
        </div>
    </>
  )
}

export default Home;