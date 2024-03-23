const HomeWhyWe = () => {
    return (
        <div className={'text-[#2c3854] mb-40'}>
            <h1 className={'font-bold text-5xl w-[60%] mb-20'}>Почему разработка приложения в нашей студии — это
                надежно?</h1>
            <div className="w-full flex justify-around">
                <div className="w-1/4 shadow-md p-5">
                    <h1 className={'text-2xl mt-5 font-bold'}>Фиксируем стоимость</h1>
                    <p className="mb-10">Ставки наших специалистов не изменятся в ходе работы над проектом</p>
                    <img src="/assets/home/Why-we/reliability-1.svg" className={'w-full'} alt=""/>
                </div>

                <div className="w-1/4 shadow-md p-5">
                    <h1 className={'text-2xl mt-5 font-bold'}>Гарантируем доступ аудитории к продукту</h1>
                    <p className="mb-10">Ваше приложение будет доступно для установки, его смогут найти и скачать — мы
                        это обеспечим</p>
                    <img src="/assets/home/Why-we/reliability-2.svg" className={'w-full'} alt=""/>
                </div>

                <div className="w-1/4 shadow-md p-5">
                    <h1 className={'text-2xl mt-5 font-bold'}>Работаем с разными технологиями</h1>
                    <p className="mb-10">Имеем альтернативные варианты для реализации функций системы, это снижает риски
                        остановки проекта, если поставщик какого-либо решения уходит с российского рынка. И оплаты в
                        приложении мы тоже сможем настроить</p>
                    <img src="/assets/home/Why-we/reliability-3.svg" className={'w-full'} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HomeWhyWe;