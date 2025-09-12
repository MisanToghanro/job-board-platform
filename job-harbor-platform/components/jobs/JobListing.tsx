import { useState,useEffect } from "react";
import JobCard from "./JobCard";
import { JobProps } from "@/interfaces";
import { useFilter } from "@/context/FilterContext";


const JobList: React.FC = () => {
     
    const {filters} = useFilter()
    const [jobs, setJobs] = useState<JobProps[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] =  useState<string | null>(null)

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch("/api/jobs")
        .then((res) => {
            if(!res.ok){
                throw new Error("Fsiled to fetch jobs");
            }
            return res.json();
        })
        .then((data) => {
            setJobs(data.jobs)
             setLoading(false)
        })
        .catch((error) => {
            setError(error);
            setLoading(false)
        })
    }, [])

    if (loading) return (<p className="text-white font-bold  text-sm md:text-lg text-center mt-5">Loading...</p>)
    
     if (error)  return (<p className="text-red-400 font-bold  text-sm md:text-lg text-center mt-5"> Oops! {error}. Please try again later.</p>)  

    const filterJobs = jobs.filter((job) => {

        return(
            (filters.category ? job.category.toLowerCase().includes(filters.category.trim().toLowerCase()): true) &&
            (filters.location ? job.location.includes(filters.location): true) &&
            (filters.experience ?job.experience === filters.experience: true)

        )
    })

    if(filterJobs.length === 0){
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
          {filterJobs.map((job) => (<JobCard key={job.id} job={job}/>))}
        </div>
        </div>

    )
}
export default JobList;