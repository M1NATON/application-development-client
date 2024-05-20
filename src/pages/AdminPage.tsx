import {NavLink, Outlet, useNavigate} from "react-router-dom";
import React from "react";
import {logout} from "../store/reducers/userSlice.ts";
import {useAppDispatch} from "../hooks/redux.ts";

const AdminPage = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const exitHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(logout())
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className={'container mt-40'}>

            <div className="flex gap-5 items-center text-3xl w-fit mx-auto">
                <NavLink to={'/admin/order'}>Заказы</NavLink>
                <NavLink to={'/admin/service'}>Услуги</NavLink>
                <NavLink to={'/admin/counseling'}>Консультации</NavLink>
                <NavLink to={'/admin/portfolio'}>Портфолио</NavLink>
                <button className={'bg-red-500 py-2 px-8 text-white rounded-xl'} onClick={exitHandler}>Выйти</button>
            </div>


            <Outlet/>
        </div>
    );
};

export default AdminPage;