

export interface JobProps{
     id:number;
    category:string;
    location:string;
    experience:""|"Entry-Level"|"Junior-Level"|"Senior-Level";
    company: string;
    description:string;
}

//remotiveApi props
export interface RemotiveApi{
  id: number,
  title: string,
  company_name: string,
  category: string,
  job_type: string,
  candidate_required_location: string,
  salary?: string,
  description: string
}

export interface SearchProps {
    search: (category:string,
         location:string, 
         experience:""|"Entry-Level"|"Junior-Level"|"Senior-Level" ) => void;
}

export interface JobApplicationProps{
    id:number
    jobId:number;
    name:string;
    email:string;
    portfolioUrl?:string;
    coverLetter:string;
}

 export interface Category{
  id:number;
  name:string;
  slug:string
 }

 export interface JobsProps{
  id:number;
  title:string;
  description:string;
  company:string;
  location:string;
  job_type:"full_time" | "part_time" | "contract" | "internship";
  category:Category;
  is_active:boolean;
  created_at:string;
  updated_at:string
 }