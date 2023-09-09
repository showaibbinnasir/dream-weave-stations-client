const TopBanner = () => {
    return (
        <div className="flex justify-center h-[500px] bg-gradient-to-r from-[#33256C] to-[#652E90]">
            <div className="flex gap-[150px] items-center">
                <div className="text-center">
                    <p className="font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Dream Weave Stations</p>
                    <p className="text-white w-[350px]">Welcome to Dream Weave Stations, where imagination meets innovation in a tapestry of digital artistry.
                    </p>
                    <div className="flex justify-center pt-2">
                        <div className="flex gap-2">
                            <img src="facebook.png" className="w-10 h-10" alt="" />
                            <img src="linkedin.webp" className="w-12 h-12" alt="" />
                            <img src="gmail.png" className="w-12 h-10" alt="" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <button className="btn bg-gradient-to-r from-[#B83CB8] to-[#7647EB] border-[#CFAB5B] text-white shadow-2xl w-[150px]">Book Now</button>
                    </div>
                </div>
                <img src="logo.png" className="w-[278px] h-[216px]" alt="" />
            </div>
        </div>
    );
};

export default TopBanner;