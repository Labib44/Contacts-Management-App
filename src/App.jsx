
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routers from './routes/Router/Router'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <div className='container mx-auto'>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
