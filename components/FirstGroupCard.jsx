export default function FirstCard() {
    return (
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="w-full p-6 border border-gray-300 rounded-sm">
                <div className="flex flex-col gap-4">
                    <img src="../Cross.png" alt="A cross like object" width={40} />
                    <h3 className="font-bold text-2xl">Design</h3>
                    <div className="flex gap-2">
                        <p className="text-xl text-gray-400">235 jobs available</p>
                        <img src="../Icon.png" alt="right arrow" />
                    </div>
                </div>
            </div>

            <div className="w-full p-6 border border-gray-300 rounded-sm">
                <div className="flex flex-col gap-4">
                    <img src="../Graph.png" alt="A graph like object" width={40} />
                    <h3 className="font-bold text-2xl">Sales</h3>
                    <div className="flex gap-2">
                        <p className="text-xl text-gray-400">756 jobs available</p>
                        <img src="../Icon.png" alt="right arrow" />
                    </div>
                </div>
            </div>

            <div className="w-full p-6 bg-blue-700 text-white border border-gray-300 rounded-sm">
                <div className="flex flex-col gap-4">
                    <img src="../Vector.png" alt="A vector like object" width={40} />
                    <h3 className="font-bold text-2xl">Marketing</h3>
                    <div className="flex gap-2">
                        <p className="text-xl text-white">140 jobs available</p>
                        <img src="../Icon.png" alt="right arrow" />
                    </div>
                </div>
            </div>
            
            <div className="w-full p-6 border border-gray-300 rounded-sm">
                <div className="flex flex-col gap-4">
                    <img src="../Card.png" alt="A card like object" width={40} />
                    <h3 className="font-bold text-2xl">Finance</h3>
                    <div className="flex gap-2">
                        <p className="text-xl text-gray-400">325 jobs available</p>
                        <img src="../Icon.png" alt="right arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}