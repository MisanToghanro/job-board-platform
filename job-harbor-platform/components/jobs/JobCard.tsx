
import { useState } from "react";
import Link from "next/link";
import { JobsProps } from "@/interfaces";

export interface JobCardProps{
    job:JobsProps
}


const JobCard: React.FC<JobCardProps> = ({job}) => {

   

    return(
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg hover:scale-105 transition cursor-pointer">
            <div>
            <p className="text-sm text-purple-600 mt-1">category: {job.category.name}</p>
            <p className="text-sm text-blue-600 mt-1">job title: {job.title}</p>
            <p className="text-sm text-gray-600">company: {job.company}</p>
            <p className="text-sm text-gray-600">location: {job.location}</p>
           <p className="text-sm text-gray-600">job type: {job.job_type}</p>
           <p className="text-gray-700 mt-2 text-md md:text-lg">{job.description}</p>
           <p className="text-sm text-gray-500">Posted on:{new Date(job.created_at).toLocaleDateString()}</p>
            </div>

          <Link href={`/apply/${job.id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-3 cursor-pointer">
            Apply now!
            </button></Link>
        </div>

    )
}
export default JobCard;