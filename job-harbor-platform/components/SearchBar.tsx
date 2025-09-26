import React, { useEffect, useState } from "react";
import JobList from "./jobs/JobListing";
import { useFilter } from "@/context/FilterContext";
import { Category } from "@/interfaces";

const SearchBar: React.FC = () => {

      const {setFilters} = useFilter();
      const [title, setTitle] = useState<string>("");
      const [jobType, setJobType] = useState<string>("");
     const[categories, setCategories] = useState<Category[]>([]);
     const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
     const[location, setLocation] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [errors, setErrors] = useState<{
        title?: string;
        jobType?:string;
        selectedCategory?:string; 
        location?:string;}>({})


 useEffect(() => {
    const fetchCategories = async () => {
     
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.categories || data.results || []);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } 
    };
    fetchCategories();
  }, []);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const inputErrors: typeof errors = {}

        if(!title.trim()){
            inputErrors.title = "Please enter a job title."
        }

        if(!location){
           inputErrors.location = "Please select a location."
        }

        if(!jobType){
            inputErrors.jobType = "Please select a jobtype."
        }

        if (!selectedCategory) {
            inputErrors.selectedCategory = "Please select a category.";
        }
        setErrors(inputErrors);

        if(Object.keys(inputErrors).length === 0){
             
             setFilters({title,location,category:selectedCategory}) ;
        }
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

        {/*job title*/}
                <div>
                    <input
                    type="text"
                    placeholder="job title...(e.Frontend developer)"
                    value={title}
                    onChange={(e) =>setTitle(e.target.value)}
                    className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md"
                    />
                    {errors.title && (<p className="bg-red-400 text-white p-2 rounded-md  text-md md:text-lg mt-1 ">{errors.title}</p>)}
                </div>

        {/*category*/}
                <div className=" ">
 <select
      value={selectedCategory?.id || ""}
      onChange={(e) =>
        setSelectedCategory(
          categories.find((c) => c.id === Number(e.target.value)) || null
        )
      }
      className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md"
    >
      <option value="">Select Category</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
                </select>
               { errors.selectedCategory && (<p className="bg-red-400 text-white p-2 rounded-md  text-md md:text-lg mt-1 ">{errors.selectedCategory}</p>)}
                </div>

        {/*job type*/}
               <div className="">
                <select 
                value={jobType}
                 onChange={(e) => setJobType(e.target.value)}
                className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md">

                <option value="" disabled >Job Type</option>

                 <option value="full_time">Full Time</option>
                  <option value="part_time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
               {errors.jobType && (<p className="bg-red-400 text-white p-2 rounded-md  text-md md:text-lg mt-1 ">{errors.jobType}</p>)}
               </div>

        {/*location*/}
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