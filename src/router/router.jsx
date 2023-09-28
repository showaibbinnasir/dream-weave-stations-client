import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default/Default";
import HomePage from "../component/HomePage/HomePage";
import Admin from "../component/Admin/Admin";
import ErrorRoute from "../component/ErrorRoute/ErrorRoute";
import Blogs from "../component/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element : <Default></Default>,
        errorElement: <ErrorRoute></ErrorRoute> ,
        children: [{
            path : '/',
            element: <HomePage></HomePage>
        },
        {
            path : '/adminsection',
            element : <Admin></Admin>,
            
        },
        {
            path: '/blogs',
            element : <Blogs></Blogs>
        }
    ]
    }
    
])

export default router;