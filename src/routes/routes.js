import Product from '../views/product/Product' 
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Home from "../views/home/Home";
import Profile from "../views/profile/Profile";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: 'Register'
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            title: 'Profile'
        }
    },
    {
        path: '/product',
        name: 'product',
        component: Product,
        meta: {
            title: 'Product'
        }
    },
]
    