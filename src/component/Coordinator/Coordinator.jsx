import Modal from "../Modal/Modal";

const Coordinator = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[5px] lg:gap-[100px] mt-16">
                <div data-aos="zoom-out-down">
                    <img src="coordinates.png" className=" w-[250px] h-[270px] lg:w-[330px] lg:h-[350px]" alt="" />
                </div>
                <div>
                    <div className="w-50">
                        <p data-aos="fade-down-right" className="text-center mt-10 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Meet Our Coordinators</p>
                        <p data-aos="fade-up" className=" w-[350px] lg:w-[500px] text-center text-black"> Our four coordinators are experts in web development, graphics design, and more, ensuring that we can meet all your creative needs under one roof.</p>
                    </div>
                    <div data-aos="fade-up-right" className="flex justify-center">
                        <Modal></Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coordinator;