import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.tsx";
import HomePage from "../pages/HomePage.tsx";
import ContactPage from "../pages/ContactPage.tsx";


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
        ]
    }
])