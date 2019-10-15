import Home from "./components/Home";
import Stocks from "./components/stocks/Stocks";
import PortfolioStock from "./components/portfolio/Stock";
import StocksStock from "./components/stocks/Stock";
import Graphics from "./components/graphics/Graphics";
import Reports from "./components/reports/Reports";

export const routes = [
    {path: '/', component: Home},
    {path: '/portfolio', component: Home},
    {path: '/portfolio/stock', component: PortfolioStock},
    {path: '/stocks/stock', component: StocksStock},
    {path: '/stocks', component: Stocks},
    {path: '/graphics', component: Graphics},
    {path: '/reports', component: Reports}
]