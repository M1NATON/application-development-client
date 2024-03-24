const ContactPage = () => {
    return (
        <div className={'mt-40'}>
            <div className="container mx-auto flex justify-betweens">
                <div className="w-1/2">
                    <p className="text-[#1166cb] text-2xl font-[600] mb-10">Консультация бесплатная</p>
                    <h1 className=" text-5xl font-bold mb-10">С чего начать?<br/>
                        Запросите консультацию!</h1>
                    <p className="text-gray-500 mb-10 text-xl">Хотите получить бесплатную консультацию о разработке мобильного приложения?
<br/><br/>
                        Мы сможем сразу дать ориентировочную оценку проекта по стоимости и срокам, если вы кратко
                        опишете его основную идею и функции.</p>
                    <div className="mb-10">
                        <button className={'bg-[#0051b1] text-white text-xl py-4 px-14 rounded-xl transition-transform hover:translate-y-[-2px]'}>Записаться на консультацию</button>
                    </div>
                    <div className="">
                        <div className="flex gap-10 mb-5">
                            <a href="#"><img src="/assets/contact/WA.svg" className={'w-[60px] hover:translate-y-[-5px] transition'} alt=""/></a>
                            <a href="#"><img src="/assets/contact/vk.svg" className={'w-[60px] hover:translate-y-[-5px] transition'} alt=""/></a>
                        </div>
                        <p className={'text-xl text-gray-500'}>Напишите нам в Телеграм или WhatsApp</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="/assets/contact/img.png" className={'mx-auto'} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;