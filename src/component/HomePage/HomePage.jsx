import Coordinator from "../Coordinator/Coordinator";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Technology from "../Technology/Technology";
import TopBanner from "../TopBanner/TopBanner";

const HomePage = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <Coordinator></Coordinator>
            <Portfolio></Portfolio>
            <Technology></Technology>
        </div>
    );
};

export default HomePage;