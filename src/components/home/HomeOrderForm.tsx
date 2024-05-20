import MyInput from "../../UI/MyInput.tsx";
import {InputMask} from "primereact/inputmask";
import React, {useState} from "react";
import {servicesAPI} from "../../store/actions/servicesService.ts";
import {arrBudget} from "../../db/db.ts";
import {IOrder} from "../../models/models.ts";
import {useAppSelector} from "../../hooks/redux.ts";
import toast from "react-hot-toast";
import {orderAPI} from "../../store/actions/orderService.ts";

const HomeOrderForm = () => {



    const {data: servicesData} = servicesAPI.useFetchAllServicesQuery()
    const [order] = orderAPI.useCreateOrderUserMutation()
    const {user} = useAppSelector(state => state.user)
    const [number, setNumber] = useState<string | null>()
    const [services, setServices] = useState(servicesData && servicesData[0].servicesId)
    const [budget, setBudget] = useState(arrBudget[0])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')


    const orderHandler = (e: React.FormEvent) => {
        e.preventDefault()

        if (user) {
            if(number && services && budget && name && email && description) {
                const body:IOrder = {
                    servicesId: services,
                    budget,
                    number,
                    description,
                    userId: user.userId,
                    status: 'В процессе'
                }
                order(body)
                toast.success('Заказ создан')
            }
        } else {
            toast.error('Авторизуйтесь что бы сделать заказ')
        }

    }


    return (
        <form action="">
            <h1 className={'text-2xl text-center mb-10'}>Мы ответим в течение 1 рабочего дня</h1>
            <div className="flex justify-between gap-5 mb-5">
                <div className="flex flex-col">
                    <label className={'text-[#357dd3]'} htmlFor="">Имя </label>
                    <MyInput type={'text'} value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label className={'text-[#357dd3]'} htmlFor="">Телефон </label>
                    <InputMask
                        className={'py-2 w-full text-xl mb-5 px-6 border-2 rounded-md transition-colors outline-0 border-[#d4e0eb] focus:border-[#1a6ccd]'}
                        onChange={(e) => setNumber(e.target.value)}
                        mask="8 999-999-99-99"
                        placeholder="8 ___-___-__-__"
                    />
                </div>
            </div>

            <div className="flex justify-between gap-5 mb-5">
                <div className="flex flex-col">
                    <label className={'text-[#357dd3]'} htmlFor="">E-mai</label>
                    <MyInput type={'text'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label className={'text-[#357dd3]'} htmlFor="">Меня интересует</label>
                    <select
                        onChange={(e) => setServices(e.target.value)}
                        className={'py-2 w-full text-xl mb-5 px-6 border-2 rounded-md transition-colors outline-0 border-[#d4e0eb] focus:border-[#1a6ccd]'}>
                        <option disabled={true}>Выбирите услугу</option>
                        {
                            servicesData && servicesData.map((item, idx) => <option key={idx} value={item.servicesId}>{item.name}</option>)
                        }
                    </select>
                </div>
            </div>
            <label className={'text-[#357dd3]'} htmlFor="">Бюджет</label>
            <select
                onChange={(e) => setBudget(e.target.value)}
                className={'py-2 w-full text-xl mb-5 px-6 border-2 rounded-md transition-colors outline-0 border-[#d4e0eb] focus:border-[#1a6ccd]'}>
                {
                    arrBudget.map((item, idx) => <option key={idx} value={item}>{item}</option>)
                }
            </select>
            <label className={'text-[#357dd3]'} htmlFor="">Описание проекта</label>
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className={'py-2 w-full text-xl mb-5 px-6 border-2 rounded-md transition-colors outline-0 border-[#d4e0eb] focus:border-[#1a6ccd]'}
            />
            <div className="text-center">
                <button
                    onClick={orderHandler}
                    className={'bg-[#0051b1] mb-2 text-white py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}
                >
                    Заказать
                </button>
            </div>
        </form>
    );
};

export default HomeOrderForm;