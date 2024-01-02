import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";

const routers=createBrowserRouter([
    {
        path:'/', element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/', element:<Home></Home>
            },
            {
                path:'/addcontact', element:<Contact></Contact>
            },
        ]
    }
])

export default routers;