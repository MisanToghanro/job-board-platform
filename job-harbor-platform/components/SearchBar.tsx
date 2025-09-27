import React, { useEffect, useState } from "react";
import JobList from "./jobs/JobListing";
import { useFilter } from "@/context/FilterContext";
import { Category } from "@/interfaces";

interface JobMeta {
  title: string;
  location: string;
}

const SearchBar: React.FC = () => {
  const { setFilters } = useFilter();

  // States for form fields
  const [titles, setTitles] = useState<string[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const [jobType, setJobType] = useState<string>(""); 
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Validation errors
  const [errors, setErrors] = useState<{
    title?: string;
    location?: string;
    jobType?: string;
    selectedCategory?: string;
  }>({});

  // Fetch categories and job metadata
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.categories);
      } catch (err) {
        console.error("Failed to fetch categories", err);
        setCategories([]);
      }
    };

     const fetchJobMeta = async () => {

      try{
        const res = await fetch("/api/jobs");
        const data = await res.json();
        const jobsArray: JobMeta[] = data.jobs ;

        const jobTitles = Array.from(
          new Set(
            jobsArray.map((job) => job.title).filter((t): t is string => typeof t === "string")
          )
        )
        const jobLocations = Array.from(
          new Set(
            jobsArray.map((job) => job.location).filter((l): l is string => typeof l === "string")
          )
        );

        setTitles(jobTitles)
        setLocations(jobLocations)

      }catch  (err) {
       console.error("failed to fetch job metadata", err);
       setTitles([]);
       setLocations([])
      }
     }

    fetchCategories();
    fetchJobMeta()
   
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!selectedTitle){
       newErrors.title = "Please enter a job title.";
    }
    if (!selectedLocation){
       newErrors.location = "Please select a location.";
    } 
    if (!jobType){
        newErrors.jobType = "Please select a job type.";
    } 
    if (!selectedCategory){
        newErrors.selectedCategory = "Please select a category.";
    } 

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFilters({
        title: selectedTitle,
        location: selectedLocation,
        category: selectedCategory,
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="text-white flex flex-col items-center p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md shadow-lg"
      >
        <h1 className="text-xl md:text-3xl font-bold text-center mt-6 mb-6">
          Your ideal job awaits you!
        </h1>

        <div className="mt-5 w-full max-w-md">
          <input
            placeholder="Search jobs..."
            type="text"
            onFocus={() => setIsOpen(true)}
            className="placeholder-white w-full py-3 px-4 border border-white rounded-full shadow-sm focus:outline-none focus:ring-blue-500"
          />

          {isOpen && (
            <div className="flex flex-col md:flex-row justify-center items-center w-full space-x-3 space-y-3 md:space-y-3 mt-6">
              {/* Job Title */}
              <div>
                <select
                  value={selectedTitle}
                  onChange={(e) => setSelectedTitle(e.target.value)}
                  className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md"
                >
                  <option value="" disabled>Select Job Title</option>
                  {titles.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.title && (
                  <p className="bg-red-400 text-white p-2 rounded-md text-md md:text-lg mt-1">
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <select
                  value={selectedCategory?.id || ""}
                  onChange={(e) =>
                    setSelectedCategory(
                      categories.find((c) => c.id === Number(e.target.value)) || null
                    )
                  }
                  className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md"
                >
                  <option value="" disabled>Select Category</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                {errors.selectedCategory && (
                  <p className="bg-red-400 text-white p-2 rounded-md text-md md:text-lg mt-1">
                    {errors.selectedCategory}
                  </p>
                )}
              </div>

              {/* Job Type */}
              <div>
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md"
                >
                  <option value="" disabled>
                    Job Type
                  </option>
                  <option value="full_time">Full Time</option>
                  <option value="part_time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                  <option value="remote">Remote</option>
                </select>
                {errors.jobType && (
                  <p className="bg-red-400 text-white p-2 rounded-md text-md md:text-lg mt-1">
                    {errors.jobType}
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-64 py-3 pl-4 bg-white text-black font-semibold rounded-md"
                >
                  <option value="" disabled>Select a Location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                {errors.location && (
                  <p className="bg-red-400 text-white p-2 rounded-md text-md md:text-lg mt-1">
                    {errors.location}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 hover:scale-105 shadow-md py-3 px-4 rounded-md cursor-pointer"
              >
                Search
              </button>
            </div>
          )}
        </div>
      </form>

      <JobList />
    </div>
  );
};

export default SearchBar;


