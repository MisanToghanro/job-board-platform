import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { JobsProps } from "@/interfaces";
import { useFilter } from "@/context/FilterContext";

const JobList: React.FC = () => {
  const { filters } = useFilter();
  const [jobs, setJobs] = useState<JobsProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const [prevUrl, setPrevUrl] = useState<string | null>(null);


    const fetchJobs = async (url: string = "/api/jobs") => {
      setLoading(true);
      setError(null);

      try {

        const res = await fetch(url);
        if(!res.ok){
          throw new Error("Failed to fetch jobs")
        }

        const data = await res.json()
         setJobs(data.jobs || [])
    setNextUrl(data.next ? `/api/jobs?${data.next.split("?")[1]}` : null);
    setPrevUrl(data.previous ? `/api/jobs?${data.previous.split("?")[1]}` : null);
      } catch (err) {
         if(err instanceof Error){
          setError(err.message);
         }else{
          setError("something went wrong")
         }
      } finally {
        setLoading(false);
      }
    };


  useEffect(() => {


    fetchJobs();
  }, [ filters]);

  const filteredJobs = jobs.filter(job => {
    const matchTitle = filters.title ? job.title.toLowerCase() === filters.title.toLowerCase() : true;
    const matchLocation = filters.location ? job.location.toLowerCase() === filters.location.toLowerCase() : true;
    const matchCategory = filters.category ? job.category?.id === filters.category.id : true;

    return matchTitle && matchLocation && matchCategory;
  })

  if (loading) {
    return (
      <p className="text-white font-bold text-sm md:text-lg text-center mt-5">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-400 font-bold text-sm md:text-lg text-center mt-5">
        Oops! {error}. Please try again later.
      </p>
    );
  }

  if (filteredJobs.length === 0) {
    return (
      <p className="text-yellow-400 font-semibold text-center mt-5 text-sm md:text-lg">
        No jobs match your search. Try adjusting your filters or search for a different role.
      </p>
    );
  }


  return (
    <div className="space-y-10">
      <h2 className="text-white font-bold text-xl md:text-2xl text-center mt-5">
        Available Jobs:
      </h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/*Pagination controls*/}
      <div className="flex justify-center space-x-4 mt-6 mb-6">

        <button
        onClick={() => prevUrl && fetchJobs(prevUrl)} 
        disabled={!prevUrl}
        className="text-white text-center px-4 py-2 bg-blue-500 rounded-md disabled:opacity-50 cursor-pointer hover:scale-105"
        >
          Previous
        </button>



        <button
          onClick={() => nextUrl && fetchJobs(nextUrl)}
          disabled={!nextUrl}
           className="text-white text-center px-4 py-2 bg-blue-500 rounded-md disabled:opacity-50 cursor-pointer hover:scale-105"
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default JobList;
