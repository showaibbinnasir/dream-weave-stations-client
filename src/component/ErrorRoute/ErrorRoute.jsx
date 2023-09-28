import { Link } from "react-router-dom";

const ErrorRoute = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-[#33256C] to-[#652E90]">
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <div className="flex justify-center mb-5">
                            <img className=" rounded-full shadow-xl" src="gif.gif" alt="" />
                        </div>
                        <h1 className="text-5xl font-bold">404 Error</h1>
                        <p className="py-6">Seems like you are trying to browse a router which is no exist in this application, or maybe its spelling mistake.</p>
                        <Link className=" shadow-lg btn bg-gradient-to-r from-[#B83CB9] to-[#7C47E7] text-white" to='/'>Go to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorRoute;