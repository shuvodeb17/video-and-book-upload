import Footer from "../../components/Share/Footer/Footer";
import Navbar from "../../components/Share/Navbar/Navbar";
import Banner from "./Banner/Banner";
import './Home.css'
import Sector from "./Sector/Sector";
import Sponsorship from "./Sponsorship/Sponsorship";
import YTVideos from "./YTVideos/YTVideos";

const Home = () => {
    return (
        <div className="background-image">
            <Navbar />
            <Banner />
            <Sector />
            <YTVideos />
            <Sponsorship />
            <Footer />
        </div>
    );
};

export default Home;