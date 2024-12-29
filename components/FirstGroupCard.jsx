export default function FirstCard() {
    return (
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="w-full p-6 border-2 border-gray-600 rounded-sm">
                <div className="flex flex-col gap-4">
                    <img src="../Cross.png" alt="A cross like object" width={40} />
                    <h3>Design</h3>
                    <div className="flex gap-2">
                        <p>235 jobs available</p>
                        <img src="../Icon.png" alt="right arrow" />
                    </div>
                </div>
            </div>

            <div className="w-full p-6 border-2 border-gray-600 rounded-sm">
                <div className="flex flex-col gap-4">
                    <img src="../Graph.png" alt="A graph like object" width={40} />
                    <h3>Design</h3>
                    <div className="flex gap-2">
                        <p>235 jobs available</p>
                        <img src="../Icon.png" alt="right arrow" />
                    </div>
                </div>
            </div>

            <div className="w-full p-6 bg-blue-700 text-white border-2 border-gray-600 rounded-sm">
                <div className="flex flex-col gap-4">
                    <img src="../Vector.png" alt="A vector like object" width={40} />
                    <h3>Design</h3>
                    <div className="flex gap-2">
                        <p>235 jobs available</p>
                        <img src="../Icon.png" alt="right arrow" />
                    </div>
                </div>
            </div>
            
            <div className="w-full p-6 border-2 border-gray-600 rounded-sm">
                <div className="flex flex-col gap-4">
                    <img src="../Card.png" alt="A card like object" width={40} />
                    <h3>Design</h3>
                    <div className="flex gap-2">
                        <p>235 jobs available</p>
                        <img src="../Icon.png" alt="right arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}