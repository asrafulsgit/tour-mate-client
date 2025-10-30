import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
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
            },  
        ]
    },
    {
                Component : Login,
                path : '/login'
            },
    {
                Component : Signup,
                path : '/signup'
            }
]);

export default routes;