import HomeHeader from "../components/home/HomeHeader.tsx";
import HomeWhyWe from "../components/home/HomeWhyWe.tsx";
import HomeQuestions from "../components/home/HomeQuestions.tsx";

const HomePage = () => {
    return (
        <div className={"mb-40"}>
            <img src="/assets/home/home-header-bg.svg" className={'-z-20 absolute top-[-300px] left-0 right-0'} alt=""/>
            <div className="container">
                <HomeHeader/>
                <HomeWhyWe/>
                <HomeQuestions/>
            </div>
        </div>
    );
};

export default HomePage;
