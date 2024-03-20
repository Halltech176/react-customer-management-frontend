import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Customers from "../pages/customers.jsx";
import Userprofile from "../pages/userprofile.jsx";


const Routes = () => {
    const pageRoute = [{
        path: "/", element: <Customers/>
    }, {
        path: "/profile", element: <Userprofile/>
    }]


    const router = createBrowserRouter([...pageRoute])
    return (<RouterProvider router={router}/>)
}

export default Routes