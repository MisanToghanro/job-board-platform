

import React, { createContext, useContext, useState, ReactNode } from "react";

//define the types and interfaces for filters
type ExperienceLevel = "" | "Entry-Level" | "Junior-Level" | "Senior-Level";

interface FilterProps {
    category:string;
    location:string;
    experience: ExperienceLevel
}

interface FilterContextType{
    filters:FilterProps;
    setFilters: React.Dispatch<React.SetStateAction<FilterProps>>
}

//create the filtercontex using the filtercontexttype
const FilterContext = createContext<FilterContextType | undefined>(undefined);

//create a provider
export const FilterProvider = ({children} : {children:ReactNode}) => {
    const[filters, setFilters] = useState<FilterProps>({
     category: "",
    location: "",
    experience: "",
    })

    return(
        <FilterContext.Provider value={{filters,setFilters}}>
             {children}
        </FilterContext.Provider>
    )
}

//cretae a custom hook to use the provider

export const useFilter = () => {
    const context = useContext(FilterContext);
    if(!context) {
        throw new Error("useFilters must be used inside FiltersProvider")
    }

    return context;
};
