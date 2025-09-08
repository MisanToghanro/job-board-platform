
import React from "react";

const Footer: React.FC = () => {

    return(
        <footer className="flex justify-center bg-gradient-to-l from-purple-500 to-purple-700 p-4">
            <p className="text-md"> JobHarbor {new Date().getFullYear()}.&copy; All rights reserved</p>
        </footer>
    )
}
export default Footer;