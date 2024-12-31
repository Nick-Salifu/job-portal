import Image from "next/image";
import Group from "../public/Group.png"
import Pattern from "../public/Pattern.png"
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

import Category from "@/components/Category";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

export default function Homepage(){
    return(
        <>
            <div className="w-full bg-[#F8F8FD]">
                <div className="flex flex-col md:flex-row items-center container justify-between mx-auto md:py-12 py-6">
                {/* The left side of the hero section */}
                <div className="px-4">
                    <div className="mb-4">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-2">Discover <br/> more than</h1>
                        <span className="text-4xl lg:text-6xl font-bold text-[#26A4FF]">5000+ Jobs</span>
                        <Image className="mt-3" src={Group} alt="blue underlines" />
                    </div>
                    <p className="text-md text-gray-400 max-w-lg mb-4">Great platform for the job seeker that is searching for new career heights and passionate about startups.</p>
                    <div className="bg-white p-3 flex flex-col md:flex-row items-center w-full gap-3 mb-4">
                        <div className="flex items-center gap-4 w-full">
                            <IoSearch size={20} />
                            <div className="space-y-2 w-full">
                                <input type="search" placeholder="Job title or keyword" className="border-none focus:outline-none" />
                                <div className="border-b-2 border-gray-300 w-full"></div>
                            </div>
                        </div>
                            <div className="flex items-center gap-4 w-full">
                                <CiLocationOn size={20} />
                                <div className="space-y-2 w-full">
                                    <div className="flex items-center justify-between">
                                        <input type="search" placeholder="Abuja, Nigeria" className="border-none focus:outline-none" />
                                        <FaAngleDown className="text-gray-400" />
                                    </div>
                                    <div className="hidden md:block border-b-2 border-gray-300"></div>
                                </div>
                            </div>
                        <button className="px-6 py-3 bg-blue-800 text-white text-sm w-full">Search my job</button>
                    </div>
                    <p>Popular: UI Designer, UX Researcher, Android, Admin</p>
                </div>

                    {/* The image part of the hero section */}
                    <div className="">
                        <Image src={Pattern} alt="background pattern image" width={860} height={794} />
                    </div>
                </div>
            </div>

            <div className="py-10 w-full px-4">
                <Category />
            </div>

            <div className="py-10 w-full ">
                <Featured />
            </div>

            <div className="w-full ">
                <Footer />
            </div>
        </>
    )
}