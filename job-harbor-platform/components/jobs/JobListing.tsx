import { useState,useEffect } from "react";
import JobCard from "./JobCard";
import { JobsProps } from "@/interfaces";
import { useFilter } from "@/context/FilterContext";


const JobList: React.FC = () => {
     
    const {filters} = useFilter()
    const [jobs, setJobs] = useState<JobsProps[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] =  useState<string | null>(null)

    useEffect(() => {
        const fetchJobs = async () => {
        setLoading(true);
        setError(null);

        try{
            const params = new URLSearchParams();

            if(filters.title) params.append("title", filters.title)
            if(filters.location) params.append("location", filters.location)
            if(filters.category) params.append("category", filters.category.id.toString())

        const res = await fetch(`/api/jobs?${params.toString()}`);

        if(!res.ok)throw new Error("Failed to fetch jobs");

        const data = await res.json();
        setJobs(data.results || []);
     } catch (error) {
     if (error instanceof Error) {
       setError(error.message);
      } else {
     setError("Something went wrong");
       }

        }finally{
            setLoading(false)
        }
        };
        fetchJobs();
    }, [filters]);

    if (loading) return (<p className="text-white font-bold  text-sm md:text-lg text-center mt-5">Loading...</p>)
    
     if (error)  return (<p className="text-red-400 font-bold  text-sm md:text-lg text-center mt-5"> Oops! {error}. Please try again later.</p>)  


    if(jobs.length === 0){
        return( 
    <p className="text-yellow-400 font-semibold text-center mt-5  text-sm md:text-lg ">
        No jobs match your search. Try adjusting your filters or search for a different role.
      </p>)
    }

    return(
        <div className=" space-y-10">
      <h2 className="text-white font-bold text-xl md:text-2xl text-center mt-5">
        Available Jobs:
      </h2>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
          {jobs.map((job) => (<JobCard key={job.id} job={job}/>))}
        </div>
        </div>

    )
}
export default JobList;