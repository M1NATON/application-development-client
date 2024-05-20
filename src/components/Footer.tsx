
const Footer = () => {



    return (
        <div className={'bg-[#1166cb] text-white w-full py-10'}>
            <div className="container flex justify-around">
                <div className="">
                    <p className={'text-[#86b1e4]'}>Контакты</p>
                    <p className="text-2xl">8(499)348-82-16</p>
                    <p className="text-2xl">support@appcraft.pro</p>
                </div>
                <div className="">
                    <p className={'text-[#86b1e4]'}>Написать нам</p>
                    <div className="flex flex-col gap-2">
                        <a href="#" className={'text-white transition-colors hover:text-[#4f8ed8]'}>Telegram</a>
                        <a href="#" className={'text-white transition-colors hover:text-[#4f8ed8]'}>WhatsApp</a>
                    </div>
                </div>

                <div className="">
                    <p className={'text-[#86b1e4]'}>Соцсети</p>
                    <div className="flex flex-col gap-2">
                        <a href="#" className={'text-white transition-colors hover:text-[#4f8ed8]'}>Vk</a>
                        <a href="#" className={'text-white transition-colors hover:text-[#4f8ed8]'}>Telegram-канал</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;