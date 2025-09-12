import { JobApplicationProps } from "@/interfaces";
import Link from "next/link";
import React, { useState } from "react";


interface ApplicationProps{
   jobId:number;
}
const ApplyForm: React.FC<ApplicationProps> = ({jobId}) => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [portfolioUrl, setPortfolioUrl] = useState<string>("");
    const [coverLetter, setCoverLetter] = useState<string>("");
    const [error,setError] = useState<Record <string,string>>({});
    const [submitted,setSubmitted] = useState<boolean>(false);

       const handleSubmit = (e:React.FormEvent) => {
            e.preventDefault();

         const inputErrors: Record <string,string> = {}

       if (!name.trim())  {
         inputErrors.name = "Full name is required."
       }     
       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
             inputErrors.email = "Enter a valid email address.";
            }
        
       if (!coverLetter.trim()) {
         inputErrors.coverLetter = "Cover letter is required."
      }

        if(Object.keys(inputErrors).length > 0){
        setError(inputErrors);
        setSubmitted(false)
        return;
       }

       const newApplication: JobApplicationProps = {

        id: Date.now(),
        jobId,
        name,
        email,
        portfolioUrl,
        coverLetter
       }

       setName("");
       setEmail("");
       setPortfolioUrl("");
       setCoverLetter("");
       setSubmitted(true);
       
       } 



       
    return(
      <div className="p-5 h-screen bg-gradient-to-b from bg-blue-500 to-purple-500 ">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg  shadow-blue-400  shadow-lg p-6 space-y-4 w-full max-w-lg mx-auto">

    <h2 className="text-2xl font-bold text-gray-800">Apply for this Job</h2>

       {submitted && ( 
       <p className="bg-green-600 text-white text-center   font-semibold">
          ✅ Application submitted successfully!
        </p>)}

        <div className="space-y-3">
            <div>
           <input   
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2"
            />

            {error.name && (<p className="text-red-500 text-sm mt-1">{error.name}</p>)}
         </div>


        <div>
           <input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2"     
            />

            {error.email && (<p className="text-red-500 text-sm mt-1">{error.email}</p>)}
        </div>

        <div>
           <input
            type="text"
            placeholder="Portflio link"
            value={portfolioUrl}
            onChange={(e) => setPortfolioUrl(e.target.value)}
            className="w-full border rounded p-2"
            />

            {error.portfolioUrl && (<p className="text-red-500 text-sm mt-1">{error.portfolioUrl}</p>)}
        </div>

        <div>
           <textarea
            
            placeholder="write something..."
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            className="w-full border rounded p-2 placeholder-gray-400"/>

            {error.coverLetter && (<p className="text-red-500 text-sm mt-1" >{error.coverLetter}</p>)}
        </div>

        <div className=" flex flex-col md:flex-row space-x-2 space-y-2 justify-between">

         <button type="submit"  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer hover:scale-105 shadow-md">submit</button>

        <Link href={`/search`}  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer hover:scale-105 shadow-md">
         Go back to searchpage
         </Link>

        </div>
        </div>

    </form>
      </div>
)
}
export default ApplyForm;