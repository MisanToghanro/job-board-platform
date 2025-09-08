import React from "react";
import DarkMode from "./DarkMode";
import Link from "next/link";
const Header: React.FC = () => {

    return(
        <header className="fixed top-0 left-0 w-full z-50 shadow-md text-white flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-700">
            <Link href="/" className="text-xl md:text-2xl font-bold cursor-pointer">Job Harbor</Link>
             <DarkMode/>
        </header>
    )
}
export default Header;