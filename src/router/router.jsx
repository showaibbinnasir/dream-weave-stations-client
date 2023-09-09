import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default/Default";
import HomePage from "../component/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element : <Default></Default>,
        children: [{
            path : '/',
            element: <HomePage></HomePage>
        },{
            path: '/registration',
            element: <div>This is registration</div>
        }
    ]
    }
])

export default router;