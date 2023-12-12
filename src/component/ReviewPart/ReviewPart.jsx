
import './ReviewPart.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './swiperstyle.module.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import ReviewModal from '../Modal/ReviewModal';
import { useQuery } from 'react-query';


const ReviewPart = () => {
    // const [review, setReview] = useState([]);
    // useEffect(() => {
    //     fetch("https://dream-weave-stations-server-showaibbinnasir.vercel.app/allreviews")
    //         .then(res => res.json())
    //         .then(data => setReview(data))
    // }, [])
    const uri = `https://dream-weave-stations-server-showaibbinnasir.vercel.app/allreviews`
    // const data = useLoaderData();
    const { data: data = [], refetch } = useQuery({
        queryKey: ['completedtasks'],
        queryFn: async () => {

            const res = await fetch(uri)
            const data = await res.json();

            return data;
        }
    })

    console.log(data);

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
                        data.map((data, i) => <SwiperSlide key={i}>
                            <div key={i} className='flex mx-5 justify-center mt-5'>
                                <div className='reviewcard rounded-2xl shadow-xl flex justify-center items-center'>
                                    <div className=''>
                                        <div className='flex justify-center mt-5 mb-3'>
                                            <img src={data.image} className='w-28 rounded-full' alt="" />
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
            <div data-aos="fade-down-right" className="flex justify-center my-2">
                <ReviewModal refetch={refetch}></ReviewModal>
            </div>

        </div>
    );
};

export default ReviewPart;

