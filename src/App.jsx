import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home';
import Loader from './Components/Loader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
], {
  basename: "/Jacket-Website/"
});

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && <RouterProvider router={router} />}
    </>
  )
}

export default App