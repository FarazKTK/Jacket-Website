import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
  ], {
    basename: "/Jacket-Website/"
  });
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App