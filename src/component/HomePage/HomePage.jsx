
import Contact from "../Contact/Contact";
import Coordinator from "../Coordinator/Coordinator";
import Footer from "../Footer/Footer";
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
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePage;