// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className="  mx-auto px-6 py-4 bg-blue-600 text-white">

                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="text-2xl font-bold" >
                        <Link to="/">Logo</Link>
                    </div>


                    {/* desktop  Menu */}
                    <div className="hidden lg:flex  gap-8">
                        <Link to="/home" className="hover:text-yellow-300">Home</Link>
                        <Link to="/view" className="hover:text-yellow-300">View</Link>
                        <Link to="/edit" className="hover:text-yellow-300">Edit</Link>
                        <Link to="/#" className="hover:text-yellow-300">Blog</Link>

                        <Link to="#" className="hover:text-yellow-300">About</Link>
                        <Link to="#" className="hover:text-yellow-300">Contact_Us</Link>
                        <Link to="#" className="hover:text-yellow-300">Contact_Us</Link>
                        <Link to="/pagination" className="hover:text-yellow-300">Pagination</Link>

                    </div>
                    {/* Desktop Login button */}
                    <div className="hidden md:block">
                        <button className="bg-white text-blue-600 px-6 py-2 ">
                           <Link to="/login">Login</Link> 
                        </button>
                    </div>


                    {/* Mobile Menu icons */}

                    <div className="md:hidden">
                        <button onClick={() => { setMenuOpen(!menuOpen) }} className="text-2xl text-white ">
                            {menuOpen ? "✖" : "☰"}
                        </button>
                    </div>
                    {/* Mobile Menu  */}
                    {menuOpen && (
                        <div className="md:hidden flex flex-col items-center gap-2  py-2">
                            <a to="#" className="hover:text-yellow-300">Home</a>
                            <a to="#" className="hover:text-yellow-300">View</a>
                            <a to="#" className="hover:text-yellow-300">Edit</a>
                            <a to="#" className="hover:text-yellow-300">Edit</a>
                            <a to="#" className="hover:text-yellow-300">Edit</a>

                            <button className="bg-white text-blue-600 px-5 py-2 rounded-lg hover:bg-gray-200">
                                Login
                            </button>

                        </div>
                    )

                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
