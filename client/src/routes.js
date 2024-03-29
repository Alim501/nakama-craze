import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import OrderPage from "./pages/OrderPage";
import Orders from "./pages/Orders";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import { ADMIN_ROUTE, ANIME_ROUTE, CART_ROUTE, INFO_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ORDERS_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";
import Grid from "./pages/Grid";

export const authRoutes=[
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
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
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:CART_ROUTE,
        Component:Cart
    },
]
export const publicRoutes=[
    {
        path:INFO_ROUTE,
        Component:Grid
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
        Component:Grid
    },
]