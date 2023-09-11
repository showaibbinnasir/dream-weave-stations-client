const TopBanner = () => {
    return (
        <div id="home" className="flex justify-center h-[600px] bg-gradient-to-r from-[#33256C] to-[#652E90]">
            <div className="flex flex-col-reverse lg:flex-row gap-[50px] lg:gap-[150px] items-center mb-24 lg:mt-0">
                <div className="text-center">
                    <p  data-aos="fade-up" className="font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Dream Weave Stations</p>
                    <p data-aos="fade-up" className="text-white w-[350px]">Welcome to Dream Weave Stations, where imagination meets innovation in a tapestry of digital artistry.
                    </p>
                    <div className="flex justify-center pt-2">
                        <div className="flex gap-2">
                            <img  data-aos="fade-down" src="facebook.png" className="w-10 h-10" alt="" />
                            <img data-aos="fade-up" src="linkedin.webp" className="w-12 h-12" alt="" />
                            <img data-aos="fade-down" src="gmail.png" className="w-12 h-10" alt="" />
                        </div>
                    </div>
                    <div data-aos="zoom-out-up" className="mt-2">
                        <button className="btn bg-gradient-to-r from-[#B83CB8] to-[#7647EB] border-[#CFAB5B] text-white shadow-2xl w-[150px]">Book Now</button>
                    </div>
                </div>
                <img data-aos="flip-left" src="logo.png" className="w-[180px] h-[150px] lg:w-[278px] lg:h-[216px]" alt="" />
            </div>
        </div>
    );
};

export default TopBanner;