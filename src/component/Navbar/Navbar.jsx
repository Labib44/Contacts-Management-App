import { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "../../assets/home/navbar1.png"


const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);


    const menuItem = <>
        <li className="flex"><Link to="/addcontact" className='flex items-center text-xl text-gray-600 font-semibold mr-5 hover:text-sky-500 duration-500 pt-5 lg:pt-5 md:mt-0'>Add Contact</Link></li>
        <li className="flex"><Link to="/allcontacts" className='flex items-center text-xl text-gray-600 font-semibold mr-5 hover:text-sky-500 duration-500 pt-5 lg:pt-5 md:mt-0'>All Contacts</Link></li>
        <li className="flex"><Link to="/favourite" className='flex items-center text-xl text-gray-600 font-semibold mr-5 hover:text-sky-500 duration-500 pt-5 lg:pt-5 md:mt-0'>My Favourite</Link></li>

    </>

    const account = <>
        <Link to={'/login'} className="self-center px-4 py-2 bg-white text-gray-600 font-semibold rounded-sm">Login</Link>

    </>
    return (
        <div className="p-3 mt-5 bg-gray-100 rounded-full container mx-auto">
            <header className="">
                <div className=" flex justify-between h-16 mx-8">
                    <Link to={"/"}  >
                        <div className="">
                            <img src={navbar} className="py-3 -mt-3 h-[90px] " alt="logo" />
                        </div>
                    </Link>

                    <div className="hidden sm:block">
                        <ul className="items-stretch flex gap-3 text-gray-800 cursor-pointer">
                            {menuItem}
                        </ul>
                    </div>
                    
                    <div className="sm:hidden">
                        <button className="p-4 sm:hidden"
                            onClick={() => setIsMobileMenu(!isMobileMenu)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        {isMobileMenu && (
                            <ul className="absolute z-50 left-0 p-2 pb-5 shadow bg-base-100 w-full">
                                {menuItem}
                                <div className="mt-5">
                                    {account}
                                </div>

                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;