import { Outlet } from "react-router-dom";
import NavigationBar from "../../component/NavigationBar/NavigationBar";

const Default = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Default;