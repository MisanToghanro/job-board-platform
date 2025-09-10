import { JobProps } from "@/interfaces";


export interface JobCardProps{
    job:JobProps
}


const JobCard: React.FC<JobCardProps> = ({job}) => {

    return(
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg hover:scale-105 transition cursor-pointer">
            <p className="text-sm text-purple-600 mt-1">Role: {job.category}</p>
            <p className="text-sm text-gray-600">company: {job.company}</p>
            <p className="text-sm text-gray-600">{job.location}</p>
           <p className="text-sm text-gray-600">experience: {job.experience}</p>
           <p className="text-gray-700 mt-2 text-md md:text-lg">{job.description}</p>
        </div>
    )
}
export default JobCard;