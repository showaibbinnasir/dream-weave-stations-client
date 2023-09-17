import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import CountUp from 'react-countup';
const Portfolio = () => {
    return (
        <div>
            <div id='portfolio' className="w-50">
                <p data-aos="fade-down-right" className="text-center mt-10 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Our Works - Portfolio</p>
            </div>
            <div className='mx-5 mt-5 mb-5' >
                {/* <div className="carousel w-full mt-10">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="work1.jpg" className="w-full h-[200px] lg:h-[500px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="banner.jpg" className="w-full h-[200px] lg:h-[500px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="summer.jpg" className="w-full h-[200px] lg:h-[500px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="web.jpg" className="w-full h-[200px] lg:h-[500px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> */}
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='imageSize'  src="work1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="banner.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="summer.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="web.jpg" />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            <div className='flex justify-center mx-5'>
                <div className="stats shadow bg-gradient-to-r from-[#34256C] to-[#612E8D] text-white">

                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Delivered</div>
                        <div className="stat-value"><CountUp duration={2.75} end={10} /></div>
                        <div className="stat-desc">From Semptember 1st to August 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Total Project</div>
                        <div className="stat-value text-[#CFAB5B]"><CountUp duration={2.75} end={15} /></div>
                        <div className="stat-desc text-[#CFAB5B]">↗︎</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Running Project</div>
                        <div className="stat-value"><CountUp duration={2.75} end={5} /></div>
                        <div className="stat-desc">↘︎ 05 (33.33%)</div>
                    </div>

                </div>

            </div>
            
            <div className="flex justify-center">
                <button data-aos="fade-down-right" className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#34256C] to-[#612E8D] text-white border-2 border-[#CFAB5B] mt-2">Show All</button>
            </div>
        </div>
    );
};
//  
export default Portfolio;