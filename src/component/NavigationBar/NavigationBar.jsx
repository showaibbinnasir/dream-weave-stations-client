import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div className="navbar shadow-xl bg-gradient-to-r from-[#33256C] to-[#652E90] px-2 lg:px-16 fixed top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-[#33256C] to-[#652E90] rounded-box w-52 text-white">
                        <li><a className="text-xl">Home</a></li>
                        <li><a className="text-xl">Services</a></li>
                        <li><a className="text-xl">Portfolio</a></li>
                        <li><a className="text-xl">Contact</a></li>

                    </ul>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img src="logo.png" className="w-[30px] lg:w-[70px] shadow-xl" alt="" />
                    <p className="lg:text-2xl text-[9px] font-semibold text-white sm:text-sm break-keep  textshadow">Dream Weave Stations</p>
                </div>
            </div>
            <div className="navbar-end text-white hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className=' hover:bg-[#CFAB5B]  hover:rounded-lg'><a className="text-xl"><p className='textshadow'>Home</p></a></li>
                    <li  className=' hover:bg-[#CFAB5B] hover:rounded-lg'><a className="text-xl textshadow">Services</a></li>
                    <li  className=' hover:bg-[#CFAB5B] hover:rounded-lg'><a className="text-xl  textshadow">Portfolio</a></li>
                    <li  className=' hover:bg-[#CFAB5B] hover:rounded-lg'><a className="text-xl  textshadow">Contact</a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default NavigationBar;