import App from "@/App";
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
            }
        ]
    }
]);

export default routes;