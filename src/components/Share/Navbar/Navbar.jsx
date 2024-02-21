import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo-1024x765.webp';
import { FaSearch } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import flag1 from '../../../assets/images/flag1.svg'
import flag2 from '../../../assets/images/flag2.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navbarHandler = () => {
        setOpen(!open);
    }

    return (
        <section className="relative">
            <div className="container mx-auto px-10 py-2">
                <div className="flex items-center justify-between">
                    <div>
                        <ul className="flex items-center gap-5">
                            <li onClick={navbarHandler} className="text-xl font-bold text-[#EE6E6E] border border-[#000] rounded-full p-2 cursor-pointer">
                                <IoMenuOutline size={24} />
                            </li>
                            <li className="text-xl font-bold text-[#EE6E6E]"><Link to="/">Home</Link></li>
                            <li className="text-xl font-bold text-[#EE6E6E]"><Link to="/">About Us</Link></li>
                            <li className="text-xl font-bold text-[#EE6E6E]"><Link to="/">Contact Us</Link></li>
                        </ul>
                    </div>

                    <img src={logo} alt="" className="w-36" />

                    <div className="flex items-center">
                        <div className="flex">
                            <input className="px-5 py-1 outline-none border-2 border-[#FDBABA] rounded-tl-2xl rounded-bl-2xl" type="text" placeholder="Search..." />
                            <button className="bg-[#FDBABA] text-[#fff] px-3 p-[10px] rounded-br-2xl rounded-tr-2xl">
                                <FaSearch />
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-2 ml-3">
                            <img src={flag1} alt="" className="w-8 h-5" />
                            <img src={flag2} alt="" className="w-8 h-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div onClick={() => setOpen(false)} className={`fixed transition-all duration-700 bg-[rgba(0,0,0,0.5)] w-screen ${open ? 'block' : 'hidden'} h-screen top-0 left-0 z-20`}>
                <div className={`w-[300px] z-[9999] transition-all duration-200 fixed ${open ? 'right-0 top-0' : '-right-[300px]'} overflow-y-auto bg-[#FFEDED] h-screen py-6 px-6`}>
                    <div className="">
                        <IoMdClose onClick={() => setOpen(false)} className="cursor-pointer" />

                        <img className="mt-5 w-32 mx-auto" src="http://localhost:5173/src/assets/images/logo-1024x765.webp" alt="" />

                        <ul className="mt-5">
                            <li className="text-[#3C3A3A] flex items-center gap-3 cursor-pointer mb-5">
                                <IoPerson size={24} />
                                <p className="text-xl font-bold">Registration/Login</p>
                            </li>
                            <li className="text-[#3C3A3A] flex items-center gap-3 cursor-pointer mb-5">
                                <FiShoppingCart size={24} />
                                <p className="text-xl font-bold">NAA Subscription</p>
                            </li>
                            <li className="text-[#3C3A3A] flex items-center gap-3 cursor-pointer">
                                <FaVideo size={24} />
                                <p className="text-xl font-bold">NAA Shows</p>
                            </li>
                        </ul>

                        {/* social */}
                        <div className="mt-10">
                            <ul className="flex items-center justify-center gap-3">
                                <li className="bg-[#4E68A0] p-2 rounded-full text-[#fff] cursor-pointer">
                                    <FaFacebookF />
                                </li>
                                <li className="bg-[#33A8F1] p-2 rounded-full text-[#fff] cursor-pointer">
                                    <CiTwitter />
                                </li>
                                <li className="bg-[#3C3A3A] p-2 rounded-full text-[#fff] cursor-pointer">
                                    <CiInstagram />
                                </li>
                                <li className="bg-[#D23433] p-2 rounded-full text-[#fff] cursor-pointer">
                                    <FaYoutube />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
