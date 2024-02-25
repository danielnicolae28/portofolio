import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import RootLayout from "./pages/RootLayout"
import Work from "./pages/Work"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"

const router = createBrowserRouter([
  {path:'/',element:<RootLayout/>,children:[
    {path:'/',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'work',element:<Work/>},
    {path:'Experience',element:<Experience/>},
    {path:'Contact',element:<Contact/>}
  ]}
 
])


const App = () => {

  return (

   <>
   <RouterProvider router = {router}/>
   </>
  )
}

export default App