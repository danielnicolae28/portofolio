
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import ErrorBoundary from "./components/ErrorBoundary";



const  App = () => {

const router  = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<ErrorBoundary/>,
   
    children:[
      {
        path:"about",
        element:<About />

      },
      {
        path:"work",
        element:<Work />
      },
      {
        path:"experience",
        element:<Experience/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])

  

  return (
    <>
 <RouterProvider router={router}/>
    </>
  )
}

export default App
