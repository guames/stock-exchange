import Home from "./components/Home";
import Stocks from "./components/stocks/Stocks";
import PortfolioStock from "./components/portfolio/Stock";
import StocksStock from "./components/stocks/Stock";

export const routes = [
    {path: '/', component: Home},
    {path: '/portfolio', component: Home},
    {path: '/portfolio/stock', component: PortfolioStock},
    {path: '/stocks/stock', component: StocksStock},
    {path: '/stocks', component: Stocks}
]