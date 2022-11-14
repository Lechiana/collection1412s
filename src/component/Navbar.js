import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar shadow-lg bg-neutral text-neutral-content fixed z-50 w-full top-0 hidden  xl:flex">
        <div className="container mx-auto">
          <div className="flex-1">
            <div className="flex gap-5">
              <div className="w-16 h-16">
                <Link to="/">
                  <img src="https://cdn.discordapp.com/attachments/819417965606207540/1040685913962971157/ddd0000.png" />
                </Link>
              </div>
              <div className="flex-none flex">
                <div className="navbar ">
                  <Link to="/" className="btn btn-ghost normal-case text-base">
                    Home
                  </Link>
                </div>
                <div className="navbar ">
                  <Link
                    to="/Collection"
                    className="btn btn-ghost normal-case text-base"
                  >
                    Image
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="dropdown dropdown-end">
              <div className="navbar ">
                <Link
                  to="/Login"
                  className="btn btn-ghost normal-case text-base"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div className="navbar ">
                  <Link
                    to="/Register"
                    className="btn btn-ghost normal-case text-base"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
