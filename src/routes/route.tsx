import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.tsx";
import HomePage from "../pages/HomePage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import AboutUsPage from "../pages/AboutUsPage.tsx";
import PortfolioPage from "../pages/PortfolioPage.tsx";
import ProfilePage from "../pages/ProfilePage.tsx";
import AdminPage from "../pages/AdminPage.tsx";
import OrderAdmin from "../components/admin/OrderAdmin.tsx";
import CounselingAdmin from "../components/admin/CounselingAdmin.tsx";
import ServiceAdmin from "../components/admin/ServiceAdmin.tsx";
import PortfolioAdmin from "../components/admin/PortfolioAdmin.tsx";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/contact',
                element: <ContactPage/>,
            },
            {
                path: '/about-us',
                element: <AboutUsPage/>,
            },
            {
                path: '/portfolio',
                element: <PortfolioPage/>,
            },
            {
                path: '/profile',
                element: <ProfilePage/>,
            },
            {
                path: '/admin',
                element: <AdminPage/>,
                children: [
                    {
                        path: '/admin/order',
                        element: <OrderAdmin/>,
                    },
                    {
                        path: '/admin/counseling',
                        element: <CounselingAdmin/>,
                    },
                    {
                        path: '/admin/service',
                        element: <ServiceAdmin/>,
                    },
                    {
                        path: '/admin/portfolio',
                        element: <PortfolioAdmin/>,
                    },
                ]
            }
        ]
    }
])