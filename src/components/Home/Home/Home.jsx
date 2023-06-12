import JobElement from "../../JobElement/JobElement";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <JobElement></JobElement>
           <Featured></Featured>
        </div>
    );
};

export default Home;