import MyInput from "../../UI/MyInput.tsx";
import {InputMask} from 'primereact/inputmask';
import React, {useState} from "react";
import {counselingAPI} from "../../store/actions/counselingService.ts";
import {ICounseling} from "../../models/models.ts";
import toast from "react-hot-toast";


const ContactForm = () => {
    const [counseling] = counselingAPI.useCreateCounselingUserMutation()

    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string | null>()
    const [message, setMessage] = useState<string>('')

    const counselingHandler = async (e: React.FormEvent) => {
        e.preventDefault()

        if (name && number && message) {
            const body: ICounseling = {
                name,
                number,
                message
            }
            await counseling(body)
            toast.success('Ваша заявка отправлена')
            setName('')
            setNumber('')
            setMessage('')
        } else {
            toast.error('Заполните поля!')
            setName('')
            setNumber('')
            setMessage('')
        }
    }

    return (
        <div>
            <label htmlFor="">Введите имя</label>
            <MyInput type={'text'} value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="">Введите номер</label>
            <InputMask
                className={'py-2 w-full text-xl mb-5 px-6 border-2 rounded-md transition-colors outline-0 border-[#d4e0eb] focus:border-[#1a6ccd]'}
                onChange={(e) => setNumber(e.target.value)}
                mask="8 999-999-99-99"
                placeholder="8 ___-___-__-__"
            />
            <label htmlFor="">Сообщение</label>
            <textarea
                value={message}
                className={'py-2 w-full text-xl mb-5 px-6 border-2 rounded-md transition-colors outline-0 border-[#d4e0eb] focus:border-[#1a6ccd]'}
                onChange={(e) => setMessage(e.target.value)}
            />
            <div className="text-center">
                <button
                    onClick={counselingHandler}
                    className={'bg-[#0051b1] mb-2 text-white py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}
                >
                    Отрпавить
                </button>
            </div>

        </div>
    );
};

export default ContactForm;