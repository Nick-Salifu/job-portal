import Image from "next/image";
import Logo from "../public/Logo.png"
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center container mx-auto py-4 md:py-8 px-5">
            <div className="flex items-center gap-14">
                <Image src={Logo} alt="Website Logo" width={130} height={130} />
                <ul className="hidden md:flex gap-4">
                    <li className="font-semibold text-lg">Find Jobs</li>
                    <li className="font-semibold text-lg">Browse Companies</li>
                </ul>
            </div>

            <div className=" hidden md:block mr-12 space-x-5">
                <button className="text-blue-600 shadow-md px-5 py-2">Login</button>
                <button className="bg-blue-600 text-white px-5 py-2 shadow-md">Sign Up</button>
            </div>

            <div className="p-1 rounded-full bg-white border border-gray-400 md:hidden">
                <HiMenuAlt2 size={22} />
            </div>
        </nav>
    )
}