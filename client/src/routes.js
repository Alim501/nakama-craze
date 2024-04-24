import Admin from "./pages/Private/Admin/Admin";
import Cart from "./pages/Private/Cart";
import Main from "./pages/Public/Main";
import OrderPage from "./pages/Private/OrderPage";
import Orders from "./pages/Private/Admin/Orders";
import ProductPage from "./pages/Public/ProductPage";
import Shop from "./pages/Public/Shop";
import Auth from "./pages/Public/Auth";
import { ADMIN_ROUTE, ANIME_ROUTE, AUTH_ROUTE, CART_ROUTE, INFO_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ORDERS_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Search from "./pages/Public/Search";
import Anime from "./pages/Public/Anime";
import Info from "./pages/Public/Info";

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
