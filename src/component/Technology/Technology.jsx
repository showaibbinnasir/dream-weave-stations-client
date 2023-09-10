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
                                <img src="html.png" alt="" />
                                <img src="css.svg" alt="" />
                                <img src="bootstrap.png" alt="" />
                                <img src="tailwind.png" alt="" />
                                <img src="js.png" alt="" />
                                <img src="es6.png" alt="" />
                                <img src="react.png" alt="" />
                                <img src="daisy.png" alt="" />
                                <img src="aos.gif" alt="" />
                            </div>
                        </marquee>
                        <marquee direction="right" className="mt-5">
                            <div className="flex items-center gap-5 marqimage">
                                <img src="node.png" alt="" />
                                <img src="ex.webp" alt="" />
                                <img src="mongo.webp" alt="" />
                                <img src="rest.webp" alt="" />
                                <img src="stripe.png" alt="" />
                                <img src="ts.png" alt="" />

                            </div>
                        </marquee>
                        <marquee className="mt-5">
                            <div className="flex items-center gap-5 marqimage">
                                <img src="photoshop.png" alt="" />
                                <img src="illus.svg" alt="" />
                                <img src="pro.png" alt="" />
                                <img src="xd.png" alt="" />
                                <img src="github.png" alt="" />
                                <img src="vercel.png" alt="" />
                                <img src="netlify.svg" alt="" />
                                <img src="vite.svg" alt="" />
                                <img src="npm.png" alt="" />
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