import MyInput from "../../UI/MyInput.tsx";
import React, {useEffect, useState} from "react";
import {userAPI} from "../../store/actions/userService.ts";
import {IUser} from "../../models/models.ts";
import toast from "react-hot-toast";
import {useAppDispatch} from "../../hooks/redux.ts";
import {setAccessToken, setUser} from "../../store/reducers/userSlice.ts";
import {useNavigate} from "react-router-dom";

const Auth = () => {

    const [login, {data: loginData, error: loginError}] = userAPI.useLoginUserMutation()
    const [registr, {error: registrError, data: registrData}] = userAPI.useRegistrationUserMutation()

    const [auth, setAuth] = useState(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (loginError) {
            toast.error(loginError.data.message)
            clearInput()
        }
    }, [loginError]);

    useEffect(() => {
        if (registrError) {
            toast.error(registrError.data.message)
            clearInput()
        }
    }, [registrError]);

    useEffect(() => {
        if (registrData) {
            toast.success(registrData.message)
            setAuth(false)
        }
    }, [registrData]);


    useEffect(() => {
        if (loginData) {
            dispatch(setUser(loginData.user))
            dispatch(setAccessToken(loginData.token))
            localStorage.setItem('token', loginData.token)
            toast.success(loginData.message)
            navigate('/')
        }
    }, [loginData]);
    const clearInput = () => {
        setEmail('')
        setPassword('')
    }
    const authHandler = (e: React.FormEvent) => {
        e.preventDefault()
        if (email && password) {
            const body: IUser = {
                email,
                password
            }
            if (auth) registr(body)
            else login(body)
            clearInput()
        } else {
            toast.error('Введите данные')
            clearInput()
        }
    }

    return (
        <div>
            <div className="w-1/4 mx-auto">
                <form action="">
                    <h1 className={'text-2xl font-bold text-center mb-10'}>{auth ? (<span>Зарегистрироваться</span>) : (
                        <span>Войти</span>)}</h1>
                    <label htmlFor="">Email</label>
                    <MyInput value={email} type={'text'} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="">Пароль</label>
                    <MyInput value={password} type={'text'} onChange={(e) => setPassword(e.target.value)}/>
                    {
                        auth ? (
                            <div className="text-center">
                                <button
                                    onClick={authHandler}
                                    className={'bg-[#0051b1] mb-2 text-white py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}
                                >
                                    Зарегистрироваться
                                </button>
                                <p onClick={() => setAuth(false)}
                                   className={'text-center cursor-pointer text-gray-400'}>Есть аккаунт? Войдите!</p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <button
                                    onClick={authHandler}
                                    className={'bg-[#0051b1] mb-2 text-white py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}
                                >
                                    Войти
                                </button>
                                <p onClick={() => setAuth(true)}
                                   className={'text-center cursor-pointer text-gray-400'}>Нет аккаунта?
                                    Зарегистрируйтесь!</p>
                            </div>
                        )
                    }

                </form>
            </div>
        </div>
    );
};

export default Auth;