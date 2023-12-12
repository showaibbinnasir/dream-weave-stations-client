import { useLoaderData, useLocation } from "react-router-dom";
import activeLike from "../../assets/activeHeart.png"
import { useEffect } from "react";
const PostDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="mt-[30px] px-5">
            <div className="flex justify-center">
                <div data-aos="fade-down-right" className="w-50">
                    <p className="text-center mt-10 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">{data[0].title}</p>
                </div>

            </div>
            <p className="text-black text-lg text-center">Author Name : {data[0].authorName}</p>
            <p className="text-black text-lg text-center">Category : {data[0].category}</p>
            <p className="text-black text-lg text-justify mt-5">{data[0].description}</p>
            <div className="flex justify-center mb-2 mt-3">
                <div className="flex items-center gap-1">
                    <img src={activeLike} className="w-10" alt="" />
                    <p className="text-lg text-black">{data[0].likes.length}</p>

                </div>
            </div>
            <div className="flex justify-center mt-5">
                <img src={data[0].image} className="w-[100%] lg:w-[50%] rounded-2xl" alt="" />
            </div>

        </div>
    );
};

export default PostDetails;