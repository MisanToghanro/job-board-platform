import React from "react";
import DarkMode from "./DarkMode";
const Header: React.FC = () => {

    return(
        <header className="flex justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-700">
            <h1 className="text-xl md:text-2xl font-bold cursor-pointer">Job Hardor</h1>
             <DarkMode/>
        </header>
    )
}
export default Header;