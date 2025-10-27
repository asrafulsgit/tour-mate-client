import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";


const routes = createBrowserRouter([
    {
        Component : App,
        path : '/',
        children : [
            {
                index : true,
                Component : Home
            },
            {
                Component : About,
                path : 'about'
            }
        ]
    }
]);

export default routes;