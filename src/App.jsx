
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster/>
    </>
  )
}

export default App
