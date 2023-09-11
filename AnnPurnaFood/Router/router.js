import ReactDOM from "react-dom/client";

import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";

import AnnPurnaFood from '../index';
import About from "../About";
import Food from "../Food";
import Cart from "../Cart";

const RouterElem = createBrowserRouter(
    [
        {
            path: '/',
            element: <AnnPurnaFood />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/food',
            element: <Food />
        },
        {
            path: '/cart',
            element: <Cart />
        }
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={RouterElem} />)

// export default RouterElem;