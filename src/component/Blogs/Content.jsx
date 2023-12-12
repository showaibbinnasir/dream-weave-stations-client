import { useEffect, useState } from "react";
import Posts from "./Posts";
import { useLocation } from "react-router-dom";

const Content = () => {
    const [category, setCategory] = useState([]);
    const [getPost, setGetpost] = useState([]);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    useEffect(() => {
        fetch('https://dream-weave-stations-server-showaibbinnasir.vercel.app/allblogs')
            .then(res => res.json())
            .then(data => setGetpost(data))
    }, [])
    const getCategory = cat => {
        alert(cat);
    }
    return (
        <div>
            <div id='portfolio' className="w-42 pt-5">
                <p data-aos="fade-down-right" className="text-center mt-10 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Dream weave's blog section</p>
                <div className="flex justify-center mt-3">
                    <div className="lg:flex gap-5 grid grid-cols-3">
                        {
                            category.map((list, i) => <div onClick={() => getCategory(list.category)} className="bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white px-3 px-2 rounded-lg" key={i}>
                                <p className="text-center">{list.category}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div className="px-5 py-5 flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {
                            getPost.map((post, i) => <Posts key={i} post={post}></Posts>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;