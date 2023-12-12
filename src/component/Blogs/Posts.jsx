import { useLocation, useNavigate } from "react-router-dom";
import activeLike from "../../assets/activeHeart.png"
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const Posts = ({ post }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const detailsPost = id => {
        navigate(`/blogs/blog/${id}`)
       
    }
    return (
        <div onClick={()=>detailsPost(post._id)} className="p-3 lg:w-[410px] w-[350px] h-[400px] lg:h-[400px] bg-gradient-to-r from-[#33256C] to-[#652E90] rounded-[25px] shadow-xl">
            <div className="flex items-center gap-2">
                <img src={post.profileImage} className="w-10" alt="" />
                <h1 className="text-white">{post.authorName}</h1>
            </div>
            <div>
                <h1 className="text-white mb-3 text-lg mt-2 font-semibold text-center">{post.title.substring(0,50)}....</h1>
                <div className="flex justify-center mb-2">
                    <div className="flex items-center gap-1">
                        <img src={activeLike} className="w-7" alt="" />
                        <p>{post.likes.length}</p>

                    </div>
                </div>
            </div>
            <div>
                <img src={post.image} className="w-[100%] lg:h-[208px] h-[185px] rounded-[25px]" alt="" />
            </div>
        </div>
    );
};

export default Posts;