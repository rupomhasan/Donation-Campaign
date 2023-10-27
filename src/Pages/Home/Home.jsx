import Cards from "../../Component/Cards/Cards/Cards";
import Banner from "../../Component/Header/Banner/Banner";

const Home = () => {
    return (
        <div className="mx-3 md:mx-5">
        <Banner></Banner>
        <Cards></Cards>
        </div>
    );
};

export default Home;