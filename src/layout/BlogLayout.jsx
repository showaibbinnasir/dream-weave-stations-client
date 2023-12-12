import { Link, Outlet } from "react-router-dom";
import Blogs from "../component/Blogs/Blogs";

const BlogLayout = () => {
    return (
        <div>
            <Blogs></Blogs>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mt-[42px]">
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side h-[100vh]  mt-[42px] fixed top-10">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gradient-to-r from-[#33256C] to-[#652E90] text-base-content">
                        <div className="flex justify-center mt-10">
                            <img src="https://i.ibb.co/7J3CckW/showaib.png" className="w-[140px]" alt="" />
                        </div>
                        <p className="text-center mt-5 font-semibold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#7E48EB] to-[#FF67FF]">Showaib bin Nasir</p>
                        <p className="text-white text-center">Verified Blogger</p>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default BlogLayout;