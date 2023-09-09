const Coordinator = () => {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[50px] lg:gap-[100px] mt-16">
                <div data-aos="zoom-out-down">
                    <img src="coordinates.png" className=" w-[250px] h-[270px] lg:w-[330px] lg:h-[350px]" alt="" />
                </div>
                <div>
                    <div className="w-50">
                        <p data-aos="fade-down-right" className="text-center mt-10 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Meet Our Coordinators</p>
                        <p data-aos="fade-up" className=" w-[350px] lg:w-[500px] text-center text-black"> Our four coordinators are experts in web development, graphics design, and more, ensuring that we can meet all your creative needs under one roof.</p>
                    </div>
                    <div data-aos="fade-up-right" className="flex justify-center">
                        <button className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#34256C] to-[#612E8D] text-white border-[#CFAB5B] scale-75">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coordinator;