import Image from "next/image";
import Logo from "../public/Logo.png"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center container mx-auto py-8">
            <div className="flex items-center gap-14">
                <Image src={Logo} alt="Website Logo" width={200} height={200} />
                <ul className="flex gap-4">
                    <li className="font-semibold text-lg">Find Jobs</li>
                    <li className="font-semibold text-lg">Browse Companies</li>
                </ul>
            </div>

            <div className="mr-12 space-x-5">
                <button className="text-blue-600 shadow-md px-5 py-2">Login</button>
                <button className="bg-blue-600 text-white px-5 py-2 shadow-md">Sign Up</button>
            </div>
        </nav>
    )
}