import PortfolioItem from "../components/portfolio/PortfolioItem.tsx";

import {portfolioAPI} from "../store/actions/portfolioService.ts";

const PortfolioPage = () => {

    const {data: portfolioData} = portfolioAPI.useFetchAllPortfolioQuery()



    return (
        <div className={'mt-40'}>
            <div className="container">
                {
                    portfolioData && portfolioData.map((item, idx) => (
                        <PortfolioItem key={idx} title={item.title} description={item.description} image={`${item.image}`}/>
                    ))
                }
            </div>
        </div>
    );
};

export default PortfolioPage;