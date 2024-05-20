import {arrTrophy} from "../db/db.ts";

const AboutUsPage = () => {


    return (
        <div className={'mt-40 text-[#2c3854]'}>
            <div className="container">
                <div className="flex mb-40 justify-around items-center w-full">
                    <div className="w-1/3 text-[#2b3753] ">
                        <p className={'text-2xl font-[600] mb-5'}>Мы работаем командой с 2011 года без привлечения
                            фрилансеров и аутсорса, только налаженные рабочие процессы и плотное общение друг с
                            другом.</p>
                        <p className={'text-2xl font-[600]'}>На нашем счету более 200 разработанных мобильных
                            приложений: мессенджеры, социальные сети, банковские системы, e-commerce и сложные
                            корпоративные решения.</p>
                    </div>
                    <div className="w-1/2">
                        <img src="/assets/about-us/office-3.jpg" className={'rounded-3xl'} alt=""/>
                    </div>
                </div>
                <h1 className={'text-5xl font-bold mb-20'}>Наши награды</h1>
                <div className="w-full flex justify-around flex-wrap">
                    {
                        arrTrophy.map((item, idx) => (
                            <div key={idx} className="w-1/3 flex gap-5 mb-20">
                                <div className="">
                                    <img src="/assets/about-us/trophy.svg" className={'h-[70px]'} alt=""/>
                                </div>
                                <div className="text-[#ccd1d8]">
                                    <h1 className={'text-xl font-bold'}>{item.position}</h1>
                                    <h1 className={'text-xl font-bold'}>{item.title}</h1>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;