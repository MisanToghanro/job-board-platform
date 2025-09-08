
import React from "react";

const Footer: React.FC = () => {

    return(
<footer className="bg-gradient-to-l from-purple-500 to-purple-700 p-4">
  <div className="max-w-6xl mx-auto text-center text-white">
    <p className="text-sm md:text-base">
      © {new Date().getFullYear()} JobHarbor. All rights reserved.
    </p>
  </div>
</footer>

    )
}
export default Footer;