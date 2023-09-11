const Services = () => {
    return (
        <div id="services" className="mx-10">
            <div className="flex justify-center">
                <div data-aos="fade-down-right" className="w-50">
                    <p className="text-center mt-10 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Our Services</p>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10">
                    <div  data-aos="zoom-out" className=" w-[150px] h-[300px] lg:w-[200px] lg:h-[320px] bg-gradient-to-r from-[#34256C] to-[#612E8D] rounded-2xl border-2 border-[#CFAB5B] p-3">
                        <div data-aos="flip-up"data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="flex justify-center">
                            <img src="gp.png" className="w-20" alt="" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-50">
                                <p className="text-center mt-5 font-semibold text-transparent text-sm lg:text-xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF] ">Graphics Design</p>
                            </div>
                        </div>
                        <p className="text-center text-white text-xs lg:text-sm">Our logo design process is a seamless journey, from initial concept to final execution.</p>
                        <div className="flex justify-center">
                            <button className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white border-[#CFAB5B] scale-75">Book Now</button>
                        </div>
                    </div>
                    <div  className="w-[150px] h-[300px] lg:w-[200px] lg:h-[320px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] rounded-2xl border-2 border-[#CFAB5B] p-3">
                    <div data-aos="flip-down"data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="flex justify-center">
                            <img src="bd.png" className="w-20" alt="" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-50">
                                <p className="text-center mt-5 font-semibold text-white text-sm lg:text-xl to-[#FF67FF] textshadow">Banner Design</p>
                            </div>
                        </div>
                        <p className="text-center text-white text-xs lg:text-sm">Design engaging banners with vivid colors, messaging, eye-catching visuals for maximum impact.</p>
                        <div className="flex justify-center">
                            <button className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white border-[#CFAB5B] scale-75">Book Now</button>
                        </div>
                    </div>
                    <div className="w-[150px] h-[300px] lg:w-[200px] lg:h-[320px] bg-gradient-to-r from-[#34256C] to-[#612E8D] rounded-2xl border-2 border-[#CFAB5B] p-3">
                    <div  data-aos="flip-up"data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="flex justify-center">
                            <img src="insta.png" className="w-20" alt="" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-50">
                                <p className="text-center mt-5 font-semibold text-transparent text-sm lg:text-xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF] ">Video & Reels</p>
                            </div>
                        </div>
                        <p className="text-center text-white text-xs lg:text-sm">Create captivating videos and reels to share stories, entertain, and engage your audience effectively.</p>
                        <div className="flex justify-center">
                            <button className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white border-[#CFAB5B] scale-75">Book Now</button>
                        </div>
                    </div>
                    <div data-aos="zoom-out" className="w-[150px] h-[300px] lg:w-[200px] lg:h-[320px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] rounded-2xl border-2 border-[#CFAB5B] p-3">
                    <div data-aos="flip-down"data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="flex justify-center">
                            <img src="dev.png" className="w-20" alt="" />
                        </div>
                        <div className="flex justify-center">
                            <div className="w-50">
                                <p className="text-center mt-5 font-semibold text-white text-sm lg:text-xl to-[#FF67FF] textshadow">Development</p>
                            </div>
                        </div>
                        <p className="text-center text-white text-xs lg:text-sm">Software powers modern life, enabling efficiency, connectivity, and innovation across diverse industries worldwide.</p>
                        <div className="flex justify-center">
                            <button className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white border-[#CFAB5B] scale-75">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;