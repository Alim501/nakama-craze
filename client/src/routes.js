import Admin from "./pages/Private/Admin/Admin";
import Cart from "./pages/Private/Cart";
import Main from "./pages/Public/Main";
import OrderPage from "./pages/Private/OrderPage";
import {ProductPage,ProductLoader} from "./pages/Public/ProductPage";
import Shop from "./pages/Public/Shop";
import Auth from "./pages/Public/Auth";
import { ADMIN_ANIME_ROUTE, ADMIN_CATEGORIES_ROUTE, ADMIN_COLORS_ROUTE, ADMIN_PRODUCTS_ROUTE, ADMIN_PROMOCODES_ROUTE, ADMIN_ROUTE, ADMIN_SIZES_ROUTE, ADMIN_USERS_ROUTE, ANIME_ROUTE, AUTH_ROUTE, CART_ROUTE, INFO_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, ORDERS_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE, SHOP_ROUTE, USER_ROUTE } from "./utils/consts";
import Search from "./pages/Public/Search";
import Anime from "./pages/Public/Anime";
import Info from "./pages/Public/Info";
import Profile from "./pages/Private/Profile";
import AdminColors from "./pages/Private/Admin/AdminColors";
import AdminAnime from "./pages/Private/Admin/AdminAnime";
import AdminProducts from "./pages/Private/Admin/AdminProducts"; 
import AdminPromocodes from "./pages/Private/Admin/AdminPromocodes";
import AdminCategories from "./pages/Private/Admin/AdminCategories";
import Page404 from "./pages/Page404";
import AdminSizes from "./pages/Private/Admin/AdminSizes";
import AdminUsers from "./pages/Private/Admin/AdminUsers";

export const adminRoutes=[
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:ADMIN_COLORS_ROUTE,
        Component:AdminColors
    },
    {
        path:ADMIN_ANIME_ROUTE,
        Component:AdminAnime
    },
    {
        path:ADMIN_PRODUCTS_ROUTE,
        Component:AdminProducts
    },
    {
        path:ADMIN_PROMOCODES_ROUTE,
        Component:AdminPromocodes
    },
    {
        path:ADMIN_CATEGORIES_ROUTE,
        Component:AdminCategories
    },
    {
        path:ADMIN_SIZES_ROUTE,
        Component:AdminSizes
    },
    {
        path:ADMIN_USERS_ROUTE,
        Component:AdminUsers
    }

]

export const authRoutes=[
    {
        path:USER_ROUTE,
        Component:Profile
    },
    {
        path:ORDERS_ROUTE,
        Component:Profile
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
        Component:Shop,
    },
    {
        path:SHOP_ROUTE+'/:id',
        Component:ProductPage,
        compLoader:ProductLoader
    },
    {
        path:ANIME_ROUTE,
        Component:Anime,
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
    {
        path:"*",
        Component:Page404
    }
]
