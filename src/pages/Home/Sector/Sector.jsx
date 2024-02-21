import './Sector.css';
import { GiMeditation } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { RiAuctionLine } from "react-icons/ri";
import { IoMdGitNetwork } from "react-icons/io";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FcFlowChart } from "react-icons/fc";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaMusic } from "react-icons/fa6";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { MdScience } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { MdPermMedia } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import circle from '../../../assets/images/circle.svg';

AOS.init();

const Sector = () => {
    return (
        <section className="mt-40 py-10">
            <div className="container mx-auto px-10">
                <div className="bg-[#FFEDED] w-full h-[80vh] rounded-tl-[100px] rounded-br-[100px]">
                    <div className="relative">
                        <div data-aos="fade-up" className="bg-[#FE9898] w-[100px] h-[100px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center left-[160px] top-5">
                            <GiMeditation size={40} />
                            <Link to=''>Meditation Sector</Link>
                        </div>

                        <div data-aos="fade-down" className="bg-[#00A289] w-[120px] h-[120px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center left-[80px] top-[110px] text-white">
                            <RiAuctionLine size={40} />
                            <Link to=''>Public auction Sector</Link>
                        </div>

                        <div data-aos="fade-right" className="bg-[#FE9898] w-[120px] h-[120px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center left-[20px] top-[230px] text-sm">
                            <IoMdGitNetwork size={30} />
                            <Link to=''>Social Communication</Link>
                        </div>

                        <div data-aos="fade-left" style={{ backgroundImage: 'linear-gradient(45deg, #fff, #781C55)' }} className="w-[130px] h-[130px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center left-[320px] top-[30px] text-sm">
                            <FaBookReader size={30} />
                            <Link to=''>Magazine Sector</Link>
                        </div>

                        <div data-aos="fade-up-right" className="bg-[#000] w-[90px] h-[90px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center left-[260px] top-[160px] text-sm text-white">
                            <FcFlowChart size={30} />
                            <Link to=''>Low Sector</Link>
                        </div>

                        <div data-aos="fade-up-left" className="bg-[#009E4B] w-[100px] h-[100px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center left-[200px] top-[260px] text-sm text-white">
                            <FaHandHoldingHeart size={30} />
                            <Link to=''>Charity Sector</Link>
                        </div>

                        <div data-aos="zoom-in-down" className="bg-[#5F0042] w-[120px] h-[120px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center left-[70px] top-[380px] text-sm text-white">
                            <MdOutlineHomeWork size={30} />
                            <Link to=''>Publishing distribution</Link>
                        </div>

                        <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-[#FE9898] w-[100px] h-[100px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center left-[350px] top-[280px] text-sm text-white">
                            <MdOutlineSportsHandball size={30} />
                            <Link to=''>Sports Sector</Link>
                        </div>

                        <div data-aos="zoom-in-up" data-aos-duration="1000" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 20%)' }} className=" text-sm bg-[#fff] w-[150px] h-[150px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center">
                            <MdPermMedia size={30} />
                            <Link to=''>Media Sector</Link>
                        </div>

                        {/* <div data-aos="zoom-in-down" data-aos-duration="1000" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-501px'}} className="text-sm bg-[#FEA4A4] font-bold text-2xl w-[200px] h-[200px] flex items-center flex-col justify-center rounded-full shadow-xl p-2 text-center">
                            <GiMeditation />
                            <Link to=''>Naa Sector</Link>
                        </div> */}

                        <div data-aos="zoom-in-down" data-aos-duration="1000" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-550px' }} className="text-sm font-bold w-[700px] height-[20px] relative flex justify-center">
                            <img className='relative' src={circle} alt="" />
                            <h1 className="text-4xl absolute top-20">NAA</h1>
                            <h1 className="text-4xl absolute top-28">SECTORS</h1>
                        </div>

                        {/*  */}
                        <div data-aos="fade-up" className="bg-[#FE9898] w-[100px] h-[100px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center right-[160px] top-5">
                            <FaChalkboardTeacher size={30} />
                            <Link to=''>Teaching Sector</Link>
                        </div>

                        <div data-aos="fade-down" className="bg-[#00A289] w-[120px] h-[120px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center right-[80px] top-[110px] text-white">
                            <SiMarketo size={30} />
                            <Link to=''>Market Sector</Link>
                        </div>

                        <div data-aos="fade-right" className="bg-[#FE9898] w-[120px] h-[120px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center right-[20px] top-[230px] text-sm">
                            <MdScience size={30} />
                            <Link to=''>Scientific research sector</Link>
                        </div>

                        <div data-aos="fade-left" className="bg-[#E40073] w-[130px] h-[130px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center right-[320px] top-[30px] text-sm text-[#fff]">
                            <FaShirt size={30} />
                            <Link to=''>Fashion Sector</Link>
                        </div>

                        <div data-aos="fade-up-left" className="bg-[#FFE52E] w-[90px] h-[90px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center right-[260px] top-[160px] text-sm">
                            <FaMusic size={20} />
                            <Link to=''>Music Sector</Link>
                        </div>

                        <div data-aos="fade-up-right" style={{ backgroundImage: 'linear-gradient(45deg, #1684F5, #9B3897)' }} className="w-[100px] h-[100px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center right-[200px] top-[260px] text-sm text-white">
                            <MdOutlineAddAPhoto size={30} />
                            <Link to=''>Photography</Link>
                        </div>

                        <div data-aos="zoom-in-down" className="bg-[#FEA4A4] w-[120px] h-[120px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center right-[70px] top-[380px] text-sm text-[#00]">
                            <MdScience size={30} />
                            <Link to=''>Scientific research sector</Link>
                        </div>

                        <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-[#FE9898] w-[100px] h-[100px] flex items-center flex-col justify-center rounded-full shadow-xl absolute p-2 text-center right-[350px] top-[280px] text-sm text-white">
                            <FaHandHoldingHeart size={30} />
                            <Link to=''>Health Sector</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sector;