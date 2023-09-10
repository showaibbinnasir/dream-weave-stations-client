import './Tech.css'
const Technology = () => {
    return (
        <div>
            <div data-aos="fade-down-right" className="flex justify-center">
                <div className="w-50">
                    <p className="text-center mt-10 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Technology we use</p>
                </div>
            </div>
            <div  className='flex justify-center'>
                <div className='flex justify-center mt-5 border-t-2 border-b-2 border-[#CFAB5B] w-[350px] lg:w-[700px]'>
                    <div className='w-[700px]'>
                        <marquee className="mt-5">
                            <div className="flex items-center gap-5 marqimage">
                                <img className=' w-[40px] lg:w-[70px]' src="html.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="css.svg" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="bootstrap.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="tailwind.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="js.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="es6.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="react.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="daisy.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="aos.gif" alt="" />
                            </div>
                        </marquee>
                        <marquee direction="right" className="mt-5">
                            <div className="flex items-center gap-5 marqimage">
                                <img className=' w-[40px] lg:w-[70px]' src="node.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="ex.webp" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="mongo.webp" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="rest.webp" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="stripe.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="ts.png" alt="" />

                            </div>
                        </marquee>
                        <marquee className="mt-5">
                            <div className="flex items-center gap-5 marqimage">
                                <img className=' w-[40px] lg:w-[70px]' src="photoshop.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="illus.svg" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="pro.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="xd.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="github.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="vercel.png" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="netlify.svg" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="vite.svg" alt="" />
                                <img className=' w-[40px] lg:w-[70px]' src="npm.png" alt="" />
                            </div>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};
// 
export default Technology;