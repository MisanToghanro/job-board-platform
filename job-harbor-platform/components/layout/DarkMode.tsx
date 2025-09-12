import { useEffect, useState } from "react";


const DarkMode: React.FC = () => {

    const [darkMode,setDarkMode] = useState(false);

   useEffect(() => {
    
        if(darkMode){
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
 
   }, [darkMode])




    return(
        <button 
        onClick={()=> setDarkMode(!darkMode)}
        className="bg-blue-500 text-white py-2 px-3 rounded-md text-sm cursor-pointer hover:bg-blue-600 hover:scale-105">
        {darkMode ? "LightMode" : "DarkMode"}
       </button>
    )

        
}
export default DarkMode;