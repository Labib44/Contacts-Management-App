import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import AllContacts from "../../pages/AllContacts/AllContacts";
import Favourites from "../../pages/AddFavourites/Favourites";

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
            {
                path:'/allcontacts', element:<AllContacts></AllContacts>
            },
            {
                path:'/favourite', element:<Favourites></Favourites>
            },
           
        ]
    }
])

export default routers;