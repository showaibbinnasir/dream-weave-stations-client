import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default/Default";
import HomePage from "../component/HomePage/HomePage";
import Admin from "../component/Admin/Admin";

const router = createBrowserRouter([
    {
        path: '/',
        element : <Default></Default>,
        children: [{
            path : '/',
            element: <HomePage></HomePage>
        },
        {
            path : '/adminsection',
            element : <Admin></Admin>,
            
        }
    ]
    }
    
])

export default router;