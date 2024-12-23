import Image from "next/image";
import Group from "../public/Group.png"
import Pattern from "../public/Pattern.png"
import { IoSearch } from "react-icons/io5";

export default function Homepage(){
    return(
        <div className="flex flex-col md:flex-row items-center container justify-between mx-auto py-12">
            {/* The left side of the hro section */}
            <div>
                <div>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">Discover <br/> more than</h1>
                    <span className=" text-4xl lg:text-6xl font-bold text-[#26A4FF] mb-2">5000+ Jobs</span>
                </div>
                <Image src={Group} alt="blue underlines" />
                <p className="text-sm text-gray-400">Great platform for the job seeker that is searching for new career heights and passionate about startups.</p>
                <div className="bg-white p-5">
                    <div>
                        <IoSearch />
                        <input type="text" placeholder="Job title or keyword" className="border-none border-b-2 border-gray-300"/>
                    </div>
                    <div>Second input</div>
                    <div>Blue button</div>
                </div>
                <p>Popular: UI Designer, UX Researcher, Android, Admin</p>
            </div>

            {/* The image part of the hero section */}
            <div className="">
                <Image src={Pattern} alt="background pattern image" width={860} height={794} />
            </div>
        </div>
    )
}