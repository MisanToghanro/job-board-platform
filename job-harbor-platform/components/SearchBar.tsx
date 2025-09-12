import React, { useState } from "react";
import JobList from "./jobs/JobListing";
import { useFilter } from "@/context/FilterContext";


const SearchBar: React.FC = () => {

      const {setFilters} = useFilter();
     const[category, setCategory] = useState<string>("");
     const[location, setLocation] = useState<string>("");
    const [experience, setExperience] = useState< ""|"Entry-Level" | "Junior-Level" | "Senior-Level">("" );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [errors, setErrors] = useState<{category?:string; location?:string; experience?:string}>({})


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const inputErrors: typeof errors = {}

        if(!category.trim()){
            inputErrors.category = "Please enter a job title."
        }

        if(!location){
           inputErrors.location = "Please select a location."
        }

        if(!experience){
            inputErrors.experience = "Please select your expertise."
        }

        setErrors(inputErrors);

        if(Object.keys(inputErrors).length === 0){
             
             setFilters({category,location,experience}) ;
        }

        setCategory("");
        setLocation("");
        setExperience("");


}

    return(
     <div>
     <form onSubmit={handleSubmit}className="text-white flex flex-col items-center p-4 bg-gradient-to-br from-purple-500 to-blue-500 px-4 md:px-8 rounded-md shadow-lg">

            <h1 className="text-xl md:text-3xl font-bold text-center mt-6  mb-6">Your ideal job awaits you!</h1>

         <div className="mt-5 w-full max-w-md ">
             
            <input
            placeholder="Search jobs..."
            type="text"
            onFocus={()=> setIsOpen(true)}
            className=" placeholder-white  w-full  py-3 px-4 border border-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500"
            />

            {isOpen && (
            <div className="flex flex-col md:flex-row justify-center items-center w-full space-x-3 space-y-3  md:space-y-3 mt-6">

                <div className=" ">
                <input 
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category/Job Title (e.g., React Developer)"
                className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md"/>
               { errors.category && (<p className="bg-red-400 text-white p-2 rounded-md  text-md md:text-lg mt-1 ">{errors.category}</p>)}
                </div>

                <div className="">
                <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md">

                    <option value="" disabled >Location</option>
                    <option value="Remote" >Remote</option>
                    <option value="In-Office" >In-Office</option>
                    <option value="Hybrid" >Hybrid</option>
                </select>
              {errors.location && (<p className="bg-red-400 text-white p-2 rounded-md  text-md md:text-lg mt-1 ">{errors.location}</p>)}
                </div>

               <div className="">
                <select 
                value={experience}
                 onChange={(e) => setExperience(e.target.value as "Entry-Level" | "Junior-Level" | "Senior-Level")}
                className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md">

                    <option value="" disabled >Experience-Level</option>
                    <option value="Entry-Level" >Entry-Level</option>
                    <option value="Junior-Level" >Junior-Level</option>
                    <option value="Senior-Level" >Senior-Level</option>
                </select>
               {errors.experience && (<p className="bg-red-400 text-white p-2 rounded-md  text-md md:text-lg mt-1 ">{errors.experience}</p>)}
               </div>
               
                <button  type="submit"   className="bg-blue-500 hover:bg-blue-600 hover:scale-105 shadow-md py-3 px-4 rounded-md cursor-pointer">Search</button>
            </div> 
            )}

        </div>
        </form>


        <JobList/>
     </div>
 
    )
}

export default SearchBar;