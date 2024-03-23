import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root.tsx";
import HomePage from "../pages/HomePage.tsx";


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            }
        ]
    }
])