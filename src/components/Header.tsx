import {NavLink} from "react-router-dom";
import {useAppSelector} from "../hooks/redux.ts";

const Header = () => {

    const {user} = useAppSelector(state => state.user)

    return (
        <div className={'bg-white shadow-lg container fixed left-0 rounded-[20px] p-5 right-0 top-5 flex items-center justify-between'}>
            <div className="w-[12%]">
                <h1 className={'text-[#357bcb] font-bold text-2xl'}>ФОТОН</h1>
            </div>
            <nav id={'nav'}>
                <ul className={'flex items-center gap-5'}>
                    <li><NavLink to={'/'} className={'transition-colors hover:text-[#76a7e7]'}>Главная</NavLink></li>
                    <li><NavLink to={'/portfolio'} className={'transition-colors hover:text-[#76a7e7]'}>Портфолио</NavLink></li>
                    <li><NavLink to={'/contact'} className={'transition-colors hover:text-[#76a7e7]'}>Консультация</NavLink></li>
                    <li><NavLink to={'/about-us'} className={'transition-colors hover:text-[#76a7e7]'}>О нас</NavLink></li>
                </ul>
            </nav>
            <div className="w-[12%]">
                {
                    user?.role ==='admin' ? (
                        <NavLink to={'/admin'} className={'bg-[#357bcb] text-white rounded-xl py-2 px-4 text-'}>Админ панель</NavLink>
                    ) : (
                        <NavLink to={'/profile'} className={'bg-[#357bcb] text-white rounded-xl py-2 px-4 text-'}>Профиль</NavLink>
                    )
                }

            </div>
        </div>
    );
};

export default Header;