import { useState } from "react";


const SearchBar: React.FC = () => {


    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="text-white min-h-screen  flex flex-col items-center p-4 bg-gradient-to-br from-blue-500 to-purple-700">
            <h1 className="text-xl md:text-3xl font-bold text-centermt-6  mb-6">Your ideal job awaits you!</h1>

            <div className="mt-5 w-full max-w-md ">
             
            <input
            placeholder="Search jobs..."
            type="text"
            onFocus={()=> setIsOpen(true)}
            className=" placeholder-white  w-full  py-3 px-4 border border-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500"
            />

            {isOpen && (
                <div className="flex flex-col md:flex-row justify-center items-center w-full space-x-3 space-y-3  md:space-y-0 mt-6">

                <select 
                defaultValue="Category"
                className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md ">

                    <option value="" disabled >Category</option>
                    <option value="Frontend Developer" >Frontend Developer</option>
                    <option value="Backend Developer" >Backend Developer</option>
                    <option value="Fullstack Develope" >Fullstack Developer</option>
                </select>

                <select 
                defaultValue="Location"
                className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md">
                    <option value="" disabled >Location</option>
                    <option value="remote" >Remote</option>
                    <option value="In-Office" >In-Office</option>
                    <option value="Hybrid" >Hybrid</option>
                </select>

                <select 
                defaultValue="Experience-Level"
                className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md">
                    <option value="" disabled >Experience-Level</option>
                    <option value="Entry-Level" >Entry-Level</option>
                    <option value="Junior-Level" >Junior-Level</option>
                    <option value="Senior-Level" >Senior-Level</option>
                </select>

                <button className="bg-blue-500 hover:bg-blue-600 hover:scale-105 shadow-md py-3 px-4 rounded-md cursor-pointer">Search</button>
            </div> 
            )}

            </div>


            
        </div>
    )
}

export default SearchBar;