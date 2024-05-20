
interface PortfolioItemProps {
    title: string
    description: string
    image: string
}


const PortfolioItem = ({title, description, image}:PortfolioItemProps) => {
    return (
        <div className="flex justify-around items-center border-2 rounded-3xl mb-20">
            <div className="text-xl">
                <h1 className={'font-bold mb-2'}>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="w-1/2">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default PortfolioItem;