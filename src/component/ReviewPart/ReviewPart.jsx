import { useState } from 'react';
import './ReviewPart.css'
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './swiperstyle.module.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const ReviewPart = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    console.log(review?.des?.length);

    return (
        <div>
            <div className="flex justify-center">
                <div data-aos="fade-down-right" className="w-50">
                    <p className="text-center mt-10 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Customer Reviews</p>
                </div>
            </div>
            <div className=' scale-75 lg:scale-100 px-5'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {
                        review.map((data, i) => <SwiperSlide key={i}>
                            <div key={i} className='flex mx-5 justify-center mt-5'>
                                <div className='reviewcard rounded-2xl shadow-xl flex items-center'>
                                    <div>
                                        <div className='flex justify-center mt-5 mb-3'>
                                            <img src={data.image} className='w-28' alt="" />
                                        </div>
                                        <h1 className='text-center text-xl font-semibold text-white'>{data.name}</h1>
                                        <h1 className='text-white font-medium text-center'>Rating: {data.rating}/5</h1>
                                        <h1 className='text-white mx-2 text-sm text-justify mt-3'>{data.des.substring(0, 400)}.....</h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
            <div className="flex justify-center my-2">
                <button data-aos="fade-down-right" className="btn w-[150px] h-[10px] bg-gradient-to-r from-[#34256C] to-[#612E8D] text-white border-2 border-[#CFAB5B] mt-2">Submit Review</button>
            </div>

        </div>
    );
};

export default ReviewPart;

