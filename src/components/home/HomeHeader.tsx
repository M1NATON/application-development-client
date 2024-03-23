
const HomeHeader = () => {
    return (
        <div className={'mt-40 text-white mb-[400px]'}>
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
                    <button className={'bg-white text-black py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}>Заказать приложение</button>
                    <button className={'bg-[#0051b1] py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}>Записаться на онлайн-консультацию</button>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;