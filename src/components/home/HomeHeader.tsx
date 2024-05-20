import {useContext, useState} from "react";
import {ModalContext} from "../../context/ModalContext.tsx";
import Modal from "../Modal.tsx";
import ContactForm from "../contact/ContactForm.tsx";
import HomeOrderForm from "./HomeOrderForm.tsx";

const HomeHeader = () => {

    const {open, modal, close} = useContext(ModalContext)
    const [order, setOrder] = useState(false)
    return (
        <div className={'mt-40 text-white mb-[600px]'}>
            <div className="w-1/2">
                <h1 className={'text-7xl font-bold mb-10'}>Разработка различных видов ПО</h1>
                <div className="flex gap-5 w-[65%] mb-5">
                    <div className="">
                        <img src="/assets/home/header/item1.svg" alt=""/>
                    </div>
                    <p className={'text-xl'}>Знаем, как решить вашу задачу оптимальным способом</p>
                </div>
                <div className="flex gap-5 w-[65%] mb-20">
                    <div className="">
                        <img src="/assets/home/header/item2.svg" alt=""/>
                    </div>
                    <p className={'text-xl'}>Подберем подходящее решение с учетом целей и возможностей</p>
                </div>


                <div className="flex justify-between">
                    <button
                        onClick={() => {
                            open()
                            setOrder(true)
                        }}
                        className={'bg-white text-black py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}>Заказать
                        приложение
                    </button>
                    <button
                        onClick={() => open()}
                        className={'bg-[#0051b1] py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}>Записаться
                        на онлайн-консультацию
                    </button>
                </div>
            </div>
            {
                modal && <Modal title={order ? 'Заказ' : 'Консультация'} onClose={() => {
                    close()
                    setOrder(false)
                }}>
                    {order ? <HomeOrderForm/> : <ContactForm/>}
                </Modal>
            }
        </div>
    );
};

export default HomeHeader;