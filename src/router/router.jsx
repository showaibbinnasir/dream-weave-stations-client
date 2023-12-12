import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default/Default";
import HomePage from "../component/HomePage/HomePage";
import Admin from "../component/Admin/Admin";
import ErrorRoute from "../component/ErrorRoute/ErrorRoute";
import BlogLayout from "../layout/BlogLayout";
import Content from "../component/Blogs/Content";
import PostDetails from "../component/Blogs/PostDetails";
import About from "../component/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Default></Default>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [{
            path: '/',
            element: <HomePage></HomePage>
        },
        {
            path: '/adminsection',
            element: <Admin></Admin>,

        },
        {
            path : '/about',
            element: <About></About>
        }

        ]
    },
    {
        path: '/blogs',
        element: <BlogLayout></BlogLayout>,
        children: [{
            path: '/blogs',
            element : <Content></Content>
        },
        {
            path : '/blogs/blog/:id',
            element : <PostDetails></PostDetails>,
            loader : ({params}) => fetch(`https://dream-weave-stations-server-showaibbinnasir.vercel.app/blog?id=${params.id}`)
        }
    ]
    }

])

export default router;