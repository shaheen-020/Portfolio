import React from 'react';
import { Link } from 'react-router-dom';
import photo from "../../assets/cv_photo.jpg";

const Navbar = () => {
    const navLinks = <>
        <li className='font-bold text-primary'><Link to="/">Home</Link></li>
        <li className='font-bold hover:text-primary'><Link to="/about">Skills</Link></li>
        <li className='font-bold hover:text-primary'><Link to="/service">Service</Link></li>
        <li className='font-bold hover:text-primary'><Link to="/contact">Contact</Link></li>
        <li className='font-bold hover:text-primary'><Link to="/reg">Register</Link></li>
    </>
    return (
        <div className=' bg-base-900'>
            <div className='w-10/12 mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {navLinks}
                            </ul>
                        </div>
                        <a href="/" class="btn btn-primary text-base font-bold border-2 border-blue-500">
                            Portfolio
                        </a>


                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end ml-8">
                        <Link to="/login" className="font-semibold text-md bg-blue-500 hover:bg-primary  px-6 py-2 rounded-xl text-white">
                            LOGIN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;