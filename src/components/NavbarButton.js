import React from "react";
import { Link } from "react-router-dom";
function NavbarButton() {
  return (
    <div className="m-2 flex flex-row p-2 mb-5 space-x-5">
      <Link
        to="/login"
        className=" bg-blue-400  hover:bg-blue-700 text-black px-3 py-1 rounded text-lg focus:outline-none shadow"
      >
        Sign-In
      </Link>
      <Link
        to="/ragister"
        className="bg-blue-400 hover:bg-blue-700 text-black  px-3 py-1 rounded text-lg focus:outline-none shadow"
      >
        Sign-up
      </Link>
      <div className="w-40 "></div>
    </div>
  );
}

export default NavbarButton;
