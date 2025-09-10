

export interface JobProps{
     id:number;
    category:string;
    location:string;
    experience:""|"Entry-Level"|"Junior-Level"|"Senior-Level";
    company: string;
    description:string;
}

export interface SearchProps {
    search: (category:string,
         location:string, 
         experience:""|"Entry-Level"|"Junior-Level"|"Senior-Level" ) => void;
}

export interface ApplicationProps{

}

