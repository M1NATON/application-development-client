import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const Root = () => {
    return (
        <div>
            <Header/>
            <div className="">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;