
const Footer = () => {
    return (
        <div className="flex justify-center bg-gradient-to-r from-[#2C2366] to-[#662E91] mt-10">
            <div className="grid grid-cols-1 gap-4 lg:gap-10 p-4 lg:grid-cols-2  ">

                <div className="w-[150px] lg:w-48 mx-auto">
                    <img src="logo.png" alt="" />
                </div>
                <div className=" text-center justify-center">
                    <div data-aos="fade-down-right" className="w-50">
                        <p className="text-center font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Dream Weave Stations</p>
                    </div>
                    <p className="text-white">Unveil Your Vision with Dream Weave Stations. <br /> E-mail: dreamweave.stations@gmail.com <br /> phone: +8801889-260520</p>
                    <div className="flex mx-auto space-x-4 justify-center items-center">
                        <img className="w-10" src="facebook.png" alt="" />
                        <img className="w-10" src="gmail.png" alt="" />
                        <img className="w-10" src="linkedin.webp" alt="" />

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;