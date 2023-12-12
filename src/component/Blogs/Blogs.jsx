import { NavLink } from "react-router-dom";

const Blogs = () => {
    return (
        <div className="">
            <div className="navbar shadow-xl z-10 bg-gradient-to-r from-[#33256C] to-[#652E90] px-2 lg:px-16 fixed top-0">
                <div className="navbar-start">
                    <div className="flex flex-row gap-2 items-center">
                        <NavLink to='/'><img src="https://i.ibb.co/RPqVtf1/logo.png" className="w-[30px] lg:w-[70px] shadow-xl" alt="" /></NavLink>
                        <p className="lg:text-2xl text-[9px] font-semibold text-white sm:text-sm break-keep  textshadow">Dream Weave Stations</p>
                    </div>
                </div>
                <div className="navbar-end text-white flex">
                    <ul className="menu menu-horizontal px-1">
                        <label tabIndex={0} htmlFor='my-drawer-2' className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <li><img src="https://i.ibb.co/7J3CckW/showaib.png" className="w-16" alt="" /></li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Blogs;