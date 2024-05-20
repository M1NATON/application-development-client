import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import React, {useEffect} from "react";
import {logout} from "../../store/reducers/userSlice.ts";
import {orderAPI} from "../../store/actions/orderService.ts";
import {servicesAPI} from "../../store/actions/servicesService.ts";

const Profile = () => {

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.user)
    const {data: orderData} = orderAPI.useFetchOrderUserQuery(user && user.userId)
    const {data: servicesData} = servicesAPI.useFetchAllServicesQuery()


    const exitHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(logout())
        localStorage.removeItem('token')
    }

    const servicesName = (servicesId:number|undefined) => {
        if(servicesData){
            const services = servicesData.find(el => el.servicesId === servicesId)
            return services ? services.name : ''
        }
    }

    return (
        <div>
            <h1 className={'font-bold text-5xl text-center mb-20'}>История заказов</h1>


            <div className="flex gap-10 flex-wrap mb-40">
                {
                    orderData && orderData.map((item, idx) => (
                        <div key={idx} className="bg-[#1166cb] w-[30%] text-2xl text-white p-5 rounded-2xl">
                            <div className="flex mb-5 justify-between items-center">
                                <p>Номер заказа:</p>
                                <p>{item.orderId}</p>
                            </div>
                            <div className="flex mb-5 justify-between items-center">
                                <p>Бюджет:</p>
                                <p>{item.budget} руб.</p>
                            </div>
                            <div className="flex mb-5 justify-between items-center">
                                <p>Услуга:</p>
                                <p>{servicesName(item.servicesId)}</p>
                            </div>
                            <div className="flex mb-5 justify-between items-center">
                                <p>Статус:</p>
                                <p>{item.status}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <button className={'bg-red-500 py-2 px-8 text-white rounded-xl'} onClick={exitHandler}>Выйти</button>
        </div>
    );
};

export default Profile;