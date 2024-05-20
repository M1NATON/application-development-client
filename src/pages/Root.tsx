import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import {Toaster} from "react-hot-toast";
import {userAPI} from "../store/actions/userService.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../hooks/redux.ts";
import {setUser} from "../store/reducers/userSlice.ts";

const Root = () => {

    const {data, isLoading} = userAPI.useProfileUserQuery()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(data) dispatch(setUser(data))
    }, [data]);

    if (isLoading) return <h1>Загрузка</h1>

    return (
        <div className={'flex flex-col min-h-screen'}>
            <Header/>
            <div className="flex-auto">
                <Outlet/>
            </div>
            <Footer/>
            <Toaster/>
        </div>
    );
};

export default Root;