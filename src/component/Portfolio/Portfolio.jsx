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
            <div className='hidden lg:block mx-5 mt-5 mb-5' >

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
                        <img className='imageSize' src="work1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="linkedWeb-01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="summer.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="portfolioweb-01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="webfarm-01.jpg" />
                    </SwiperSlide>



                </Swiper>
            </div>
            <div className='block lg:hidden mx-5 mt-5 mb-5' >

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
                        <img className='imageSize' src="logoMobile-01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="acsban.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="summermobile.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="webmobile-01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="portfolioMobile-01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="banner-01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="coordinators-01.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='imageSize' src="linkedMobile-01.jpg" />
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='flex justify-center mx-5'>
                <div className="stats shadow bg-gradient-to-r from-[#34256C] to-[#612E8D] text-white">

                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Delivered</div>
                        <div  data-aos="flip-up" className="stat-value"><CountUp duration={6} end={15} /></div>
                        <div className="stat-desc">From Semptember 1st to August 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Total Project</div>
                        <div  data-aos="flip-up" className="stat-value text-[#CFAB5B]"><CountUp duration={10} end={20} /></div>
                        <div className="stat-desc text-[#CFAB5B]">↗︎</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-white">Running Project</div>
                        <div  data-aos="flip-up" className="stat-value"><CountUp duration={5} end={5} /></div>
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