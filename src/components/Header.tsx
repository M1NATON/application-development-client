import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'bg-white shadow-lg container fixed left-0 rounded-[20px] p-5 right-0 top-5 flex items-center justify-between'}>
            <div className="w-[12%]">
                <img src="/assets/header/logo.svg" className={''} alt=""/>
            </div>
            <nav id={'nav'}>
                <ul className={'flex items-center gap-5'}>
                    <li><NavLink to={'/'} className={'transition-colors hover:text-[#76a7e7]'}>Главная</NavLink></li>
                    <li><NavLink to={'/'} className={'transition-colors hover:text-[#76a7e7]'}>Услуги</NavLink></li>
                    <li><NavLink to={'/contact'} className={'transition-colors hover:text-[#76a7e7]'}>Консультация</NavLink></li>
                    <li><NavLink to={'/'} className={'transition-colors hover:text-[#76a7e7]'}>О нас</NavLink></li>
                </ul>
            </nav>
            <div className="w-[12%]">
                <NavLink to={'/'} className={'bg-[#357bcb] text-white rounded-xl py-2 px-4 text-'}>Профиль</NavLink>
            </div>
        </div>
    );
};

export default Header;