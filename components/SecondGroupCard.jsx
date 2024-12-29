export default function SecondCard() {
    return (
        <div className="mt-10">
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="w-full p-6 border-2 border-gray-600 rounded-sm">
                    <div className="flex flex-col gap-4">
                        <img src="../Tele.png" alt="A television like object" width={40} />
                        <h3>Design</h3>
                        <div className="flex gap-2">
                            <p>235 jobs available</p>
                            <img src="../Icon.png" alt="right arrow" />
                        </div>
                    </div>
                </div>

                <div className="w-full p-6 border-2 border-gray-600 rounded-sm">
                    <div className="flex flex-col gap-4">
                        <img src="../Angle.png" alt="A angle object" width={40} />
                        <h3>Design</h3>
                        <div className="flex gap-2">
                            <p>235 jobs available</p>
                            <img src="../Icon.png" alt="right arrow" />
                        </div>
                    </div>
                </div>

                <div className="w-full p-6 border-2 border-gray-600 rounded-sm">
                    <div className="flex flex-col gap-4">
                        <img src="../Bag.png" alt="A bag like object" width={40} />
                        <h3>Design</h3>
                        <div className="flex gap-2">
                            <p>235 jobs available</p>
                            <img src="../Icon.png" alt="right arrow" />
                        </div>
                    </div>
                </div>
                
                <div className="w-full p-6 border-2 border-gray-600 rounded-sm">
                    <div className="flex flex-col gap-4">
                        <img src="../People.png" alt="A group" width={40} />
                        <h3>Design</h3>
                        <div className="flex gap-2">
                            <p>235 jobs available</p>
                            <img src="../Icon.png" alt="right arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}