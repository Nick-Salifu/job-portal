import Cards from "./Cards";

export default function Category() {
    return (
        <div className="container mx-auto py-12">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl text-center md:text-left md:text-5xl font-bold">Explore By <span className="text-[#26A4FF]">Category</span></h1>
                <div className="hidden md:flex items-center gap-2">
                    <p className="text-[#26A4FF]">Show all jobs</p>
                    <img src="../icon.png" alt="Arrow Icon" />
                </div>
            </div>
            
            <div>
                <Cards />
            </div>
        </div>
    )
}