import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const Root = () => {
    return (
        <div className={'flex flex-col min-h-screen'}>
            <Header/>
            <div className="flex-auto">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;