export default function SecondCard() {
    return (
        <div className="mt-10">
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="w-full p-6 border border-gray-300 rounded-sm">
                    <div className="flex flex-col gap-4">
                        <img src="../Tele.png" alt="A television like object" width={40} />
                        <h3 className="font-bold text-2xl">Technology</h3>
                        <div className="flex gap-2">
                            <p className="text-xl text-gray-400">436 jobs available</p>
                            <img src="../Icon.png" alt="right arrow" />
                        </div>
                    </div>
                </div>

                <div className="w-full p-6 border border-gray-300 rounded-sm">
                    <div className="flex flex-col gap-4">
                        <img src="../Angle.png" alt="A angle object" width={40} />
                        <h3 className="font-bold text-2xl">Engineering</h3>
                        <div className="flex gap-2">
                            <p className="text-xl text-gray-400">542 jobs available</p>
                            <img src="../Icon.png" alt="right arrow" />
                        </div>
                    </div>
                </div>

                <div className="w-full p-6 border border-gray-300 rounded-sm">
                    <div className="flex flex-col gap-4">
                        <img src="../Bag.png" alt="A bag like object" width={40} />
                        <h3 className="font-bold text-2xl">Business</h3>
                        <div className="flex gap-2">
                            <p className="text-xl text-gray-400">211 jobs available</p>
                            <img src="../Icon.png" alt="right arrow" />
                        </div>
                    </div>
                </div>
                
                <div className="w-full p-6 border border-gray-300 rounded-sm">
                    <div className="flex flex-col gap-4">
                        <img src="../People.png" alt="A group" width={40} />
                        <h3 className="font-bold text-2xl">Human Resource</h3>
                        <div className="flex gap-2">
                            <p className="text-xl text-gray-400">346 jobs available</p>
                            <img src="../Icon.png" alt="right arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}