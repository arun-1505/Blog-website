import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'


import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPost";
import { RouterProvider } from 'react-router-dom'
import Contact from "./components/footercomponent/Contact.jsx"
import Features from "./components/footercomponent/Features.jsx"
import  Pricing from "./components/footercomponent/Pricing.jsx"
import Affilate from "./components/footercomponent/Affilate.jsx"
import Customersupport from "./components/footercomponent/Customersupport.jsx"




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
        {
            path:"/Contact",
            element:<Contact/>

        },
        {
            path:"/Features",
            element:<Features/>

        },
        {
            path:"/Pricing",
            element:<Pricing/>

        },
        {
            path:"/Affilate",
            element:<Affilate/>


        },
        {
            path:"/Customersupport",
            element:<Customersupport/>

        },
        
      
       
        
    ],
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />

   
    </Provider>
  </StrictMode>,
)
