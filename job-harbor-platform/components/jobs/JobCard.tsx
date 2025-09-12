import { JobProps } from "@/interfaces";
import { useState } from "react";
import Link from "next/link";

export interface JobCardProps{
    job:JobProps
}


const JobCard: React.FC<JobCardProps> = ({job}) => {

   

    return(
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg hover:scale-105 transition cursor-pointer">
            <div>
            <p className="text-sm text-purple-600 mt-1">Role: {job.category}</p>
            <p className="text-sm text-gray-600">company: {job.company}</p>
            <p className="text-sm text-gray-600">{job.location}</p>
           <p className="text-sm text-gray-600">experience: {job.experience}</p>
           <p className="text-gray-700 mt-2 text-md md:text-lg">{job.description}</p>
            </div>

          <Link href={`/apply/${job.id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-3 cursor-pointer">
            Apply now!
            </button></Link>
        </div>

    )
}
export default JobCard;