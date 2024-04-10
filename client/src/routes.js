import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import OrderPage from "./pages/OrderPage";
import Orders from "./pages/Orders";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import { ADMIN_ROUTE, ANIME_ROUTE, AUTH_ROUTE, CART_ROUTE, INFO_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ORDERS_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Search from "./pages/Search";
import Anime from "./pages/Anime";
import Info from "./pages/Info";

export const authRoutes=[
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:ORDERS_ROUTE,
        Component:Orders
    },
    {
        path:ORDERS_ROUTE+'/:id',
        Component:OrderPage
    },
    {
        path:CART_ROUTE,
        Component:Cart
    },
]
export const publicRoutes=[
    {
        path:INFO_ROUTE,
        Component:Info
    },
    {
        path:MAIN_ROUTE,
        Component:Main
    },
    {
        path:SHOP_ROUTE,
        Component:Shop
    },
    {
        path:SHOP_ROUTE+'/:id',
        Component:ProductPage
    },
    {
        path:ANIME_ROUTE,
        Component:Anime
    },
    {
        path:SEARCH_ROUTE,
        Component:Search
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:AUTH_ROUTE,
        Component:Auth
    },
]
